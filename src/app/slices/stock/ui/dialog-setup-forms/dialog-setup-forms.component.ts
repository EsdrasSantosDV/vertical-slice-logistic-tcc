import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Product } from '../../../product/models/model/product';
import { materialModules } from '../../../../shared/utils/material/material-module';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductStockFormGroup } from '../../utils/forms-types/product-stock-form';

@Component({
  selector: 'app-dialog-setup-forms',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './dialog-setup-forms.component.html',
  styleUrl: './dialog-setup-forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogSetupFormsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      products: Product[];
    },
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogSetupFormsComponent>
  ) {}

  form = this.fb.group({
    startDate: this.fb.control<Date | null>(null, [Validators.required]),
    endDate: this.fb.control<Date | null>(null, [Validators.required]),
    margin: this.fb.control<number | null>(null, [Validators.required]),
    productsStock: this.fb.array<ProductStockFormGroup>([]),
  });

  get productsStock(): FormArray<ProductStockFormGroup> {
    return this.form.controls['productsStock'];
  }
  close() {
    this.dialogRef.close();
  }

  deleteProduct(indexProduct: number) {
    this.productsStock.removeAt(indexProduct);
  }

  addProduct() {
    this.productsStock.push(
      this.fb.group({
        productId: this.fb.control<string | null>(null, [Validators.required]),
        replacementTime: this.fb.control<number | null>(null, [
          Validators.required,
        ]),
        orderCost: this.fb.control<number | null>(null, [Validators.required]),
        storageCost: this.fb.control<number | null>(null, [
          Validators.required,
        ]),
      })
    );
  }
}
