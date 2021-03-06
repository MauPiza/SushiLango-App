import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppSushiRoutingModule } from './app-sushi-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MostOrdenedComponent } from './pages/most-ordened/most-ordened.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { FoodDescriptionComponent } from './pages/food-description/food-description.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaqComponent } from './pages/faq/faq.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MostOrdenedComponent,
    NotFoundComponent,
    LastOrdersComponent,
    FoodDescriptionComponent,
    FavoritesComponent,
    InitPageComponent,
    FaqComponent,
    FeedbackComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    FlexLayoutModule,
    AppSushiRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
})
export class AppSushiModule {}
