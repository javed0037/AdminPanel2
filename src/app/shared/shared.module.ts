import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
      HeaderComponent,
    FooterComponent,
    LoginComponent,
  ]
})
export class SharedModule { }
