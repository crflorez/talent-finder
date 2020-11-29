import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarTalentoPageRoutingModule } from './buscar-talento-routing.module';

import { BuscarTalentoPage } from './buscar-talento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarTalentoPageRoutingModule
  ],
  declarations: [BuscarTalentoPage]
})
export class BuscarTalentoPageModule {}
