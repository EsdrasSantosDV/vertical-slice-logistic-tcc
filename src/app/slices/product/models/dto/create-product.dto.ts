import { ProductCategoryEnum } from '../enum/product-category.enum';

export interface ProductDto {
  name: string;
  description?: string;
  category: ProductCategoryEnum;
  height: number;
  width: number;
  depth: number;
  storageInstructions?: string;
  restrictions?: string;
}
