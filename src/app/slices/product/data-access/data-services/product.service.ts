import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../../../shared/utils/injection-tokens/base-url';
import { Product } from '../../models/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly #http = inject(HttpClient);
  readonly #url = `${inject(BaseUrl)}products`;

  getAll() {
    return this.#http.get<Product[]>(this.#url + '/get-products');
  }

  

}
