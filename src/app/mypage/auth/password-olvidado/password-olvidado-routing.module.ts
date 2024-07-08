import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordOlvidadoPage } from './password-olvidado.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordOlvidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordOlvidadoPageRoutingModule {}
