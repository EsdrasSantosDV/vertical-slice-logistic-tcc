import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'stock-levels',
        pathMatch: 'full',
      },
      {
        path: 'stock-levels',
        loadComponent: async () =>
          (await import('../feature/stock-levels/stock-levels.component'))
            .StockLevelsComponent,
      },
    ],
  },
];
