import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormsDynamicComponent } from '../../../../shared/ui/generic-forms-dynamic/generic-forms-dynamic.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from '../../../product/models/model/product';
import { ProductStockFormGroup } from '../../utils/forms-types/product-stock-form';
import { materialModules } from '../../../../shared/utils/material/material-module';
import {
  ProductStockDto,
  StockLevelDto,
} from '../../models/dto/stock-level.dto';

@Component({
  selector: 'app-calculate-stock-levels',
  standalone: true,
  imports: [
    CommonModule,
    GenericFormsDynamicComponent,
    ...materialModules,
    ReactiveFormsModule,
  ],
  templateUrl: './calculate-stock-levels.component.html',
  styleUrl: './calculate-stock-levels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculateStockLevelsComponent {
  @Input({
    alias: 'products',
    required: true,
  })
  products!: Product[];

  @Output() parametersEmitterLevel = new EventEmitter<StockLevelDto>();
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    startDate: this.fb.control<Date | null>(null, [Validators.required]),
    endDate: this.fb.control<Date | null>(null, [Validators.required]),
    margin: this.fb.control<number | null>(null, [Validators.required]),
    productsStock: this.fb.array<ProductStockFormGroup>([]),
  });

  get productsStock(): FormArray<ProductStockFormGroup> {
    return this.form.controls['productsStock'];
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

  trackById(index: number, item: any) {
    return item.id;
  }

  resetForms() {
    this.form.reset();
  }

  determinateLevel() {
    console.log('determinateLevel');
    if (this.form.valid && this.productsStock.length > 0) {
      console.log('form valid');
      const formValue = this.form.value;
      const stockLevelDto: StockLevelDto = {
        startDate: formValue.startDate as Date,
        endDate: formValue.endDate as Date,
        margin: formValue.margin as number,
        productsStock: formValue.productsStock as ProductStockDto[],
      };

      this.parametersEmitterLevel.emit(stockLevelDto);
    }
  }
}
