import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../../../product/data-access/data-services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { FieldBaseGeneric } from '../../../../shared/utils/dynamic-forms/field-base-generic';
import { Product } from '../../../product/models/model/product';
import { StockLevelByProduct } from '../../models/model/stock-level-by-product';
import { StockService } from '../data-services/stock.service';
import { map, pluck, switchMap, tap } from 'rxjs';
import { DialogSetupFormsComponent } from '../../ui/dialog-setup-forms/dialog-setup-forms.component';
import {
  ProductStockDto,
  StockLevelDto,
} from '../../models/dto/stock-level.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface StockState {
  products: Product[];
  stockLevels: StockLevelByProduct[];
}
const initialState: Readonly<StockState> = {
  products: [],
  stockLevels: [],
};
@Injectable({
  providedIn: 'root',
})
export class FacadeStockService {
  readonly #productService = inject(ProductService);
  readonly #stockService = inject(StockService);

  constructor(private readonly dialog: MatDialog) {}

  readonly #state = signal(initialState);

  readonly products = computed(() => this.#state().products);
  readonly stockLevels = computed(() => this.#state().stockLevels);

  loadProducts() {
    return this.#productService.getAll().pipe(
      tap(value => {
        this.#state.update(state => ({
          ...state,
          products: value,
        }));
      })
    );
  }

  calculateStockLevels(productStockDto: StockLevelDto) {
    return this.#stockService.stockLevel(productStockDto).pipe(
      tap(value => {
        this.#state.update(state => ({
          ...state,
          stockLevels: value,
        }));
      })
    );
  }

  loadStockLevels() {}
}
