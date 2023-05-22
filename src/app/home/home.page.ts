import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable()
export class HomePage implements OnInit{

  auth: string;
  
  constructor(private http: HttpClient, private service: ProductoService) {
    this.auth = this.service.pocket_auth;
  }


  ngOnInit() {

    console.log("datos sin eliminar pocket:", localStorage)
    localStorage.removeItem('pocketbase_auth');
  
    const token: any = localStorage.getItem('token');
    //localStorage.removeItem('pocketbase_auth')

    if (token) {
      // Verificar si el token es válido
      //console.log("token guardado:", token);
    } 
  }
}