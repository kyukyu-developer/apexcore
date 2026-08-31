import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule),
  },
  {
    path: 'solutions',
    loadChildren: () => import('./pages/solutions/solutions.module').then(m => m.SolutionsModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
