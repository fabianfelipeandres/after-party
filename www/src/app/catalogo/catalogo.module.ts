import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';
import { CatalogoPage } from './catalogo.page';
import { ProfilePage } from '../profile/profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule
  ],
  declarations:[CatalogoPage],
  providers:[ProfilePage]
})
export class CatalogoPageModule {}
