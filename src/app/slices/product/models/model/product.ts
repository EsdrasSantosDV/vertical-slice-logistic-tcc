import { ProductDto } from '../dto/create-product.dto';

export interface Product extends ProductDto {
  id: string;
}
