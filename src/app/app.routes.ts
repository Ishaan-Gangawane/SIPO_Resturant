import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '**',
        loadComponent: () =>
          import('./pages/pages/home/home').then(m => m.Home),
      },

    {
        path: 'menu',
        loadComponent: () =>
          import('./pages/pages/menu/menu').then(m => m.Menu),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/pages/contact/contact').then(m => m.Contact),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/pages/about/about').then(m => m.About),
      },
      
];
