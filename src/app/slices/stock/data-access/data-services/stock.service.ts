import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../../../shared/utils/injection-tokens/base-url';
import { StockLevelByProduct } from '../../models/model/stock-level-by-product';
import { StockLevelDto } from '../../models/dto/stock-level.dto';
import { map, Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  readonly #http = inject(HttpClient);
  readonly #url = `${inject(BaseUrl)}stock-levels`;

  stockLevel(
    stockParameters: StockLevelDto
  ): Observable<StockLevelByProduct[]> {
    return this.#http.post<StockLevelByProduct[]>(
      this.#url + '/get-stock-levels',
      {
        ...stockParameters,
      }
    );
  }
}
