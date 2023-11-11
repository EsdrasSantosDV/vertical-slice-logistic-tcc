import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeStockService } from '../../data-access/facades/facade-stock.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, Observable } from 'rxjs';
import { StockTableSetupComponent } from '../../ui/stock-table-setup/stock-table-setup.component';
import { FilterGenericComponent } from '../../../../shared/ui/filter-generic/filter-generic.component';
import { CalculateStockLevelsComponent } from '../../ui/calculate-stock-levels/calculate-stock-levels.component';
import {
  ProductStockDto,
  StockLevelDto,
} from '../../models/dto/stock-level.dto';

@Component({
  selector: 'app-stock-levels',
  standalone: true,
  imports: [
    CommonModule,
    StockTableSetupComponent,
    FilterGenericComponent,
    CalculateStockLevelsComponent,
  ],
  templateUrl: './stock-levels.component.html',
  styleUrl: './stock-levels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockLevelsComponent {
  readonly #logisticFacade = inject(FacadeStockService);
  readonly products = this.#logisticFacade.products;
  readonly stockLevels = this.#logisticFacade.stockLevels;
  readonly products$ = this.#logisticFacade
    .loadProducts()
    .pipe(takeUntilDestroyed());

  readonly vm$ = combineLatest([this.products$]);

  calculateLevels($event: StockLevelDto) {
    this.#logisticFacade.calculateStockLevels($event).subscribe();
  }
}
