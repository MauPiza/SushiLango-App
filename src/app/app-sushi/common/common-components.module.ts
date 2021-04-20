import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RapidActionsMenuComponent } from './rapid-actions-menu/rapid-actions-menu.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppSushiRoutingModule } from '../app-sushi-routing.module';

@NgModule({
  declarations: [SidebarComponent, RapidActionsMenuComponent],
  imports: [
    CommonModule,
    AppSushiRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [SidebarComponent, RapidActionsMenuComponent],
})
export class CommonComponentsModule {}
