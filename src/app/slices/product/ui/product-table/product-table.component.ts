import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../models/model/product';
import { GenericTableComponent } from '../../../../shared/ui/generic-table/generic-table.component';
import { materialModules } from '../../../../shared/utils/material/material-module';
import { CategoryEnumTranslatePipe } from '../../../../shared/pipes/product/category-enum-translate.pipe';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [...materialModules, GenericTableComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent {
  @Input({
    required: true,
  })
  products!: Product[];


  columns = [
    {
      columnDef: 'id',
      header: 'Identificação do Produto',
      cell: (element: Product) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Nome do Produto',
      cell: (element: Product) => `${element.name}`,
    },
    {
      columnDef: 'description',
      header: 'Descrição do Produto',
      cell: (element: Product) => `${element.description}`,
    },
    {
      columnDef: 'category',
      header: 'Categoria de Produto',
      cell: (element: Product) => `${element.category}`,
    },
    {
      columnDef: 'height',
      header: 'Altura do Produto',
      cell: (element: Product) => `${element.height}`,
    },
    {
      columnDef: 'width',
      header: 'Largura do Produto',
      cell: (element: Product) => `${element.width}`,
    },
    {
      columnDef: 'storageInstructions',
      header: 'Instruções de Armazenamento do Produto',
      cell: (element: Product) => `${element.storageInstructions}`,
    },
    {
      columnDef: 'restrictions',
      header: 'Restrições do Produto',
      cell: (element: Product) => `${element.restrictions}`,
    },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
}
