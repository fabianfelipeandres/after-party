import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilePageModule } from './profile/profile.module';
import { CatalogoPageModule } from './catalogo/catalogo.module';
import { ProductoService } from './producto.service';
import { CustomAuthStore } from './custom-auth-store';
import { HttpConfigInterceptor } from './Interceptor/http-config-interceptor';
import { InicioSesionPageModule } from './inicio-sesion/inicio-sesion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ProfilePageModule, CatalogoPageModule, InicioSesionPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProductoService, CustomAuthStore, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }, InicioSesionPageModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}