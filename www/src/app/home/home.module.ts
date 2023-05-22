import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Component } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion.page';
import { InicioSesionPageModule } from '../inicio-sesion/inicio-sesion.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [InicioSesionPage]
})
export class HomePageModule {}
