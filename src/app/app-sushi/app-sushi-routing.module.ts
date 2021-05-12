import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FoodDescriptionComponent } from './pages/food-description/food-description.component';
import { MostOrdenedComponent } from './pages/most-ordened/most-ordened.component';
import { GoToPayComponent } from './pages/go-to-pay/go-to-pay.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { InitPageComponent } from './pages/init-page/init-page.component';

const routes: Routes = [
  {
    path: '',
    component: InitPageComponent,
    children: [
      {
        path: 'dashboard',
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

      //START PATHS BELONGED TO 'SIDEBAR-PAGES'
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
      //END PATHS BELONGED TO 'SIDEBAR-PAGES'
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
