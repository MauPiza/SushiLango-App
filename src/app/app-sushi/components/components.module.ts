import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { SocialNetworkButtonsComponent } from './social-network-buttons/social-network-buttons.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardCardsComponent, SocialNetworkButtonsComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
  exports: [DashboardCardsComponent, SocialNetworkButtonsComponent],
})
export class ComponentsModule {}
