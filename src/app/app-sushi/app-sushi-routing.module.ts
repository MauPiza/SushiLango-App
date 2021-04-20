import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FoodDescriptionComponent } from './pages/food-description/food-description.component';
import { MostOrdenedComponent } from './pages/most-ordened/most-ordened.component';
import { GoToPayComponent } from './toolbar-pages/go-to-pay/go-to-pay.component';
import { MenuComponent } from './toolbar-pages/menu/menu.component';
import { ProfileComponent } from './toolbar-pages/profile/profile.component';
import { InitPageComponent } from './pages/init-page/init-page.component';

const routes: Routes = [
  {
    path: '',
    component: InitPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: 'food-description/:id', //foodish ID
        component: FoodDescriptionComponent,
      },
      {
        path: 'last-orders',
        component: LastOrdersComponent,
      },
      {
        path: 'most-ordened',
        component: MostOrdenedComponent,
      },
      //START PATHS BELONGED TO 'TOOLBAR-PAGES' FOLDER
      {
        path: 'go-to-pay',
        component: GoToPayComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      //END PATHS BELONGED TO 'TOOLBAR-PAGES' FOLDER
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppSushiRoutingModule {}
