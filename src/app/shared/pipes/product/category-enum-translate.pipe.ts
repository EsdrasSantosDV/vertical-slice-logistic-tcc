import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../slices/product/models/model/product';
import { ProductCategoryEnumTranslations } from '../../../slices/product/models/enum/product-category.enum';

@Pipe({
  name: 'categoryEnumTranslate',
  standalone: true,
})
export class CategoryEnumTranslatePipe implements PipeTransform {
  transform(product: Product, ...args: unknown[]): string {
    const category = product.category;
    return ProductCategoryEnumTranslations[category] || 'Unknown Category';
  }
}
