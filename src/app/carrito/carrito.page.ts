import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
@Injectable()
export class CarritoPage implements OnInit{

  //obtengo los productos del carrito del servicio
  productos: any = [];
  //obtengo el total del carrito del servicio
  total: any;
  //obtengo la cantidad del carrito del servicio
  cantidadcarrito: any;

  constructor(private activateRoute: ActivatedRoute, public service: ProductoService, private route: Router) {
    this.productos = this.service.messages;
    this.total = this.service.total;
    this.cantidadcarrito = this.service.cantidad;
    
  }

  //actualizo el total del carrito desde el servicio
  getvalor(){
    this.service.mivariable$.subscribe(valor => {
      this.total = valor;
      //console.log("nuevo",this.to);
    });
  }

  //actualiza la cantidad de producto del carrito del servicio
  getcantidad(){
    this.service.micantidad$.subscribe(valor => {
      this.cantidadcarrito = valor;
      console.log("cantidad carrito:", this.cantidadcarrito);
      
    });
  }

  //elimino producto del carrito
  eliminarElemento(id: string) {
    this.service.elimino(id);
  }

  ordenar(){

    this.route.navigate(['/orden']);
  }

  ngOnInit(){ 
    
    //el valor es null si no hay productos
    if(this.total=null){
      this.total = 0;
    }

    //actualizo la cantidad al iniciar
    this.getcantidad()
    //actualizo el valor al iniciar
    this.getvalor()
  }
}
