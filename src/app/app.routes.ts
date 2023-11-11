import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: async () =>
      (await import('./slices/product/routes/routes')).routes,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
