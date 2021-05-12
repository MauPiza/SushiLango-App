import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../app-sushi/components/components.module';
import { AuthRoutingModule } from './auth-routing.module';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';

@NgModule({
  declarations: [LoginComponent, SignInComponent, HeaderAuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
