import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ProductoService } from '../producto.service';
import PocketBase, { Admin, Record } from 'pocketbase';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-orden',
  templateUrl: './orden.page.html',
  styleUrls: ['./orden.page.scss'],
})
export class OrdenPage implements OnInit {

  productos: any = []
  valor: any;
  cantProductos: any;
  auth: any;
  

  constructor(private service: ProductoService, private http: HttpClient) 
  {
    this.productos = this.service.messages;
    this.valor = this.service.total;
    this.cantProductos = this.service.cantidad;
    this.auth = this.service.pocket_auth;
  }

  getnumerOrden(){

  }


  getcantidad(){
    this.service.micantidad$.subscribe(valor => {
      this.cantProductos = valor;
      
    });
  }

  //actualizo el total del carrito desde el servicio
  getvalor(){
    this.service.mivariable$.subscribe(valor => {
      this.valor = valor;
      //console.log("nuevo",this.to);
    });
  }

  async guardarOrden(comuna: string, direccion: string){

    const pb = new PocketBase('http://127.0.0.1:8090/');

    try {

      // example create data
      const data = {
        "id_orden": 1,
        "cantidad_productos": parseInt(this.cantProductos),
        "precio_orden": parseInt(this.valor),
        "comuna": comuna,
        "direccion": direccion,
        "usuario": this.auth[0]
      };

      console.log(data)

      const record = await pb.collection('orden').create(data);

      // return this.http.post<any>('http://127.0.0.1:8090/api/collections/orden/records', {data}).toPromise().then(
      //   (response) => {
      //     console.log("respuesta:",response)
      //   }, (error) => {
      //     console.error('Error controlado:', error);
      //   }
      // );
      
    } catch (error) {
      console.error(error)
    }
  }

  ngOnInit() {

    this.getcantidad();
    this.getvalor();
  }

}
