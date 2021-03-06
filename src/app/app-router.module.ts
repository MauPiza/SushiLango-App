import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'sushilango',
    loadChildren: () =>
      import('./app-sushi/app-sushi.module').then((m) => m.AppSushiModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
