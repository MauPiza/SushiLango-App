import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SocialNetworkButtonsComponent } from './social-network-buttons/social-network-buttons.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { AppSushiRoutingModule } from '../app-sushi/app-sushi-routing.module';

@NgModule({
  declarations: [
    HeaderAuthComponent,
    SocialNetworkButtonsComponent,
    DashboardCardsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppSushiRoutingModule,
  ],
  exports: [
    HeaderAuthComponent,
    SocialNetworkButtonsComponent,
    DashboardCardsComponent,
    AppSushiRoutingModule,
  ],
})
export class ComponentsModule {}
