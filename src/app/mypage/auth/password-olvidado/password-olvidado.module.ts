import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordOlvidadoPageRoutingModule } from './password-olvidado-routing.module';

import { PasswordOlvidadoPage } from './password-olvidado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordOlvidadoPageRoutingModule
  ],
  declarations: [PasswordOlvidadoPage]
})
export class PasswordOlvidadoPageModule {}
