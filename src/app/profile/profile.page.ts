import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import PocketBase, { Admin, Record } from 'pocketbase';
import { ProductoService } from '../producto.service';

const pb = new PocketBase('http://127.0.0.1:8090/');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ["profile.page.scss"],
})
@Injectable()
export class ProfilePage implements OnInit {

  //obtengo el producto completo para mostrar en ion-card
  producto: any = [];
  numero: number = 0;
  isDisable = true;
  //obtengo el carrito del servicio
  productos: any = [];
  existe = false;
 
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    public service: ProductoService,
  ) { this.productos = this.service.messages }


  //submit agrego
  public async agrego(){
    //obtengo la imagen del producto seleccionado
    let arc = "http://localhost:8090/api/files/" + this.producto.collectionId + "/" + this.producto.id + "/" + this.producto.field;
    const pbi = new PocketBase('http://127.0.0.1:8090/api/');

    //si hay 1 producto se puede agregar al carrito 
    if(this.numero>=1){
      this.isDisable = true;
      //si la cantidad a agregar es mayor o igual al stock se agrega
      if(this.producto.id_producto>=this.numero){
        //for para revisar si el producto ya existe en el carro debe enviar un mensaje en la aplicacion
        for(let i=0; i<this.productos.length; i++){
          if(this.productos[i].id === this.producto.id){
            this.existe = true;
            break;
          }
        }
  
        //si no existe realiza las condiciones
        if(!this.existe){
          //crea constante para obtener el total del producto agregado
          const nuevo = this.producto.valor * this.numero;
          //guarda la constante en la variable
          this.producto.valor = nuevo;
          //agrega el producto al servicio
          this.service.add(this.producto);
          // crea una constante para la cantidad de productos en carrito
          let cantidad = this.productos.length;
          // envia la cantidad de productos al servicio
          this.service.enviarCantidad(cantidad);
        }
      }else{
        alert("no se puede agregar mas producto de los que hay en stock");
        // agregar public mas referencia hasta cantidad en stock
      }
    }else{
      //si el numero es 0 el boton queda desabilitado para agregar
      this.isDisable = false;
    }
  }

  //validacion menos nª2
  public menos(){
    if(this.numero<=1){
      this.isDisable = true;
      this.numero=0;
    }else{
      this.numero = this.numero - 1;
      this.isDisable = false;
    } 
  } 

  // 2 forma de validacion mas
  public mas(){
    this.numero = this.numero + 1
    this.isDisable = false;
  }

  ngOnInit() 
  {
    //Obtengo el id del producto seleccionado 
    const profileId = this.activateRoute.snapshot.paramMap.get('id')!;
    
    //Obtengo los datos del producto con el id del producto
    this.http.get<any>('http://127.0.0.1:8090/api/collections/producto/records/' + profileId)
    .subscribe(res => {
      //Guardo los datos en un any que guarda los atributos del objeto
      this.producto = res;
      //console.log('producto', this.producto);
    });  
  }
}

//validacion menos nª1
  // public menos(numero:number){
  //   if(this.numero<0)rn this.numero = 0;
  //   }
  //   this.numero = this.numero - 1
  //   return console.log(this.numero);  
  // }

 // 1 forma de validacion aumentar
  // public mas(numero:number){
  //   console.log(this.numero); 
  // }