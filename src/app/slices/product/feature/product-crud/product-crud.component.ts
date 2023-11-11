import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeProductService } from '../../data-access/facades/facade-product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, first } from 'rxjs';
import { FilterGenericComponent } from '../../../../shared/ui/filter-generic/filter-generic.component';
import { ProductTableComponent } from '../../ui/product-table/product-table.component';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [CommonModule, FilterGenericComponent, ProductTableComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCrudComponent {
  readonly #logisticFacade = inject(FacadeProductService);
  readonly fields = this.#logisticFacade.fieldsFilter;
  readonly products = this.#logisticFacade.products;
  readonly fields$ = this.#logisticFacade
    .loadInitForms()
    .pipe(takeUntilDestroyed());
  readonly products$ = this.#logisticFacade
    .loadProducts()
    .pipe(takeUntilDestroyed());
  readonly vm$ = combineLatest([this.fields$, this.products$]);
}
