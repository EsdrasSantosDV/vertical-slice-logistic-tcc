import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from '../../../../shared/ui/generic-table/generic-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StockLevelByProduct } from '../../models/model/stock-level-by-product';
import {
  ProductStockDto,
  StockLevelDto,
} from '../../models/dto/stock-level.dto';

@Component({
  selector: 'app-stock-table-setup',
  standalone: true,
  imports: [
    CommonModule,
    GenericTableComponent,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './stock-table-setup.component.html',
  styleUrl: './stock-table-setup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTableSetupComponent {
  @Input({
    alias: 'stockLevels',
    required: true,
  })
  levelsStock!: StockLevelByProduct[];

  columns = [
    {
      columnDef: 'id',
      header: 'Identificação do produto',
      cell: (element: StockLevelByProduct) => `${element.productId}`,
    },
    {
      columnDef: 'name',
      header: 'Nome do produto',
      cell: (element: StockLevelByProduct) => `${element.name}`,
    },
    {
      columnDef: 'currentStock',
      header: 'Estoque atual do produto',
      cell: (element: StockLevelByProduct) => `${element.currentStock}`,
    },
    {
      columnDef: 'minStock',
      header: 'Estoque de segurança do produto',
      cell: (element: StockLevelByProduct) => `${element.minStock}`,
    },
    {
      columnDef: 'maxStock',
      header: 'Estoque máximo do produto',
      cell: (element: StockLevelByProduct) => `${element.maxStock}`,
    },
    {
      columnDef: 'orderPoint',
      header: 'Ponto de pedido do produto',
      cell: (element: StockLevelByProduct) => `${element.orderPoint}`,
    },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
}
