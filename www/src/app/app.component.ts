import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  message: any;
  productos: any = []
  userAgent = navigator.userAgent;

  constructor(public service: ProductoService) {
    this.message = this.service.cantidad;
    this.productos = this.service.messages;
  }

  //obtengo la cantidad y si es mayor o igual a 1 lo muestra en carrito chico
  getcantidad(){
    if(this.productos.length>=1){
      return this.service.cantidad;
    }else{
      return this.message = "0"
    }
  }

  ngOnInit(){
    var isChrome = navigator.userAgent.indexOf('Chrome') !== -1;
    if (isChrome) {
      console.log("Realizar acciones específicas para Chrome");
    } else {
      console.log("Realizar acciones para otros navegadores");
    }
  }

}
