import {ProductCrudComponent} from "../feature/product-crud/product-crud.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'crud',
        pathMatch: 'full',
      },
      {
        path: 'crud',
        loadComponent: async () =>
          (
            await import(
              '../feature/product-crud/product-crud.component'
              )
          ).ProductCrudComponent,
      },
    ],
  },
];
