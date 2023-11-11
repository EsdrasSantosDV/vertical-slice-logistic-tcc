import { FormControl, FormGroup } from '@angular/forms';

export type ProductStockFormGroup = FormGroup<{
  productId: FormControl<string | null>;
  replacementTime: FormControl<number | null>;
  orderCost: FormControl<number | null>;
  storageCost: FormControl<number | null>;
}>;
