import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProductoService {

  messages: any = [];

  //Enviar total actualizado
  public total = new EventEmitter<any>();
  private variablesujeta = new Subject<any>();
  mivariable$ = this.variablesujeta.asObservable();

  //Enviar cantiadad actualizada
  cantidad = new EventEmitter<number>();
  private cantidadsujeta = new Subject<number>();
  micantidad$ = this.cantidadsujeta.asObservable();
  
  //autenticacion
  pocket_auth: any = [];

  //crear orden
  orden: any = []
  comuna: any;
  direccion: any;
  statusOrden: any;


  constructor(private http: HttpClient) {}

  agrega_auth(auth: string){

    //lo agrego
    this.pocket_auth.push(auth);
    console.log(this.pocket_auth);
  }

  getauth(){
    return this.pocket_auth;
    console.log("consola servicio:", this.pocket_auth);
  }

  //metodo para obtener la cantidad de productos del carrito chico
  getCantidad(){
    return this.cantidad;
  }

  //metodo para actualizar cantidad en servicio
  enviarCantidad(valor: any){
    this.cantidadsujeta.next(valor);
  }

  //metodo para actualizar valor del carrito en servicio
  enviarVariable(valor: any) {
    this.variablesujeta.next(valor);
  }

  //metodo para eliminar producto
  elimino(elim: string){
    //creo constante para encontrar producto
    const index = this.messages.findIndex((elemento: any) => elemento.id === elim);
    //si lo encuentra
    if (index !== -1) {
      // elimina el elemento del carrito
      this.messages.splice(index, 1);
      //obtengo el nuevo valor total del carrito
      this.total = this.messages.reduce((previous:any, current:any) => { return previous + current.valor;}, 0);
      // envio el nuevo total para actualizar
      this.enviarVariable(this.total);
      //obtengo la nueva cantidad de productos
      this.cantidad = this.messages.length;
      // envio la nueva cantidad de productos
      this.enviarCantidad(this.cantidad);
    }
    console.log("array carrito actual:",this.messages)
    console.log("cantidad carrito service:",this.cantidad);
  }

  //agrego metodo para agregar un producto en un array
  add(message: string){

    //lo agrego
    this.messages.push(message);

    //obtengo el valor total de todos los productos del array
    this.total = this.messages.reduce((previous:any, current:any) => { return previous + current.valor;}, 0);
    //envio el nuevo total para actualizar
    this.enviarVariable(this.total);
    //obtengo la nueva cantidad de productos
    this.cantidad = this.messages.length;
    // envio la nueva cantidad de productos
    this.enviarCantidad(this.cantidad);
    console.log("cantidad carrito service:",this.cantidad);
    
  }
}