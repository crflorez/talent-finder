import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarTalentoPage } from './buscar-talento.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarTalentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarTalentoPageRoutingModule {}
