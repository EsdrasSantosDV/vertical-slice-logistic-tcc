export interface StockLevelDto {
  startDate: Date;
  endDate: Date;
  margin: number;
  productsStock: ProductStockDto[];
}

export interface ProductStockDto {
  productId: string;
  replacementTime: number;
  orderCost: number;
  storageCost: number;
}
