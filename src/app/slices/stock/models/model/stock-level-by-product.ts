export interface StockLevelByProduct {
  productId: string;
  name: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  orderPoint: number;
}
