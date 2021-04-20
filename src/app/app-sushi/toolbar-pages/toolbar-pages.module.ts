import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { GoToPayComponent } from './go-to-pay/go-to-pay.component';

@NgModule({
  declarations: [MenuComponent, ProfileComponent, GoToPayComponent],
  imports: [CommonModule],
  exports: [MenuComponent, ProfileComponent, GoToPayComponent],
})
export class ToolbarPagesModule {}
