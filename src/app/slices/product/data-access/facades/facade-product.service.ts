import { computed, inject, Injectable, signal } from '@angular/core';
import { FieldBaseGeneric } from '../../../../shared/utils/dynamic-forms/field-base-generic';
import { DropdownField } from '../../../../shared/utils/dynamic-forms/field-dropdown';
import { TextBoxField } from '../../../../shared/utils/dynamic-forms/field-textbox';
import { of, tap } from 'rxjs';
import { Product } from '../../models/model/product';
import { ProductService } from '../data-services/product.service';

export interface LogisticState {
  fieldsFilter: FieldBaseGeneric<string>[];
  products: Product[];
}
const initialState: Readonly<LogisticState> = {
  fieldsFilter: [],
  products: [],
};
@Injectable({
  providedIn: 'root',
})
export class FacadeProductService {
  readonly #productService = inject(ProductService);

  readonly #state = signal(initialState);

  readonly products = computed(() => this.#state().products);

  readonly fieldsFilter = computed(() => this.#state().fieldsFilter);

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

  loadInitForms() {
    const fieldsForm: FieldBaseGeneric<string>[] = [
      new TextBoxField({
        key: 'id',
        label: 'Identificação do Produto',
        value: '',
        required: true,
        order: 2,
      }),

      new DropdownField({
        key: 'category',
        label: 'Categoria do Produto',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 2,
      }),

      new TextBoxField({
        key: 'name',
        label: 'Nome do Produto',
        value: '',
        required: true,
        order: 1,
      }),
    ];

    return of(fieldsForm.sort((a, b) => a.order - b.order)).pipe(
      tap(value => {
        this.#state.update(state => ({
          ...state,
          fieldsFilter: value,
        }));
      })
    );
  }
}
