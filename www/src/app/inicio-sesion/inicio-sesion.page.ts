import { Component, Injectable, Input, OnInit } from '@angular/core';
import PocketBase, { Admin, Record } from 'pocketbase';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
@Injectable()
export class InicioSesionPage  implements OnInit {

  correo?:string;
  contra?:string;
  rou?: string;
  template: any;
  authData: any;

  constructor(
    private http: HttpClient,
    private service: ProductoService,
    private route: Router
  ) { }

  actrou(mess: string){
    this.rou = mess;
  }

  async login(value: string, valu: string): Promise<any>{ 

    const pb = new PocketBase('http://127.0.0.1:8090/');

    try {

      this.authData = await pb.admins.authWithPassword(value, valu);
      
      if(this.authData){ 
        //console.log("datos auth:",this.authData);
        //localStorage.removeItem('token');
        //localStorage.removeItem('pocketbase_auth')
        localStorage.setItem('token', pb.authStore.token);
        //pb.authStore.clear()     

        const routerlink = "carrito"; 
        this.actrou(routerlink);

        this.route.navigate(['/home']);
 
      }
    } catch(error){
      console.error(error);
    } 
  } 

  async loginUser(email: string, pass: string): Promise<any>{

    const pb = new PocketBase('http://127.0.0.1:8090/');

    try {
      
      const authData = await pb.collection('users').authWithPassword(email, pass);

      if(authData){

        console.log(pb.authStore.isValid);
        localStorage.setItem('token', pb.authStore.token);
        this.authData = pb.authStore.model?.['name'];
        this.service.agrega_auth(this.authData);

        const routerlink = "carrito"; 
        this.actrou(routerlink);

        this.route.navigate(['/home']);
      }

    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    
  }
}

// return this.http.post('http://127.0.0.1:8090/api/admins/auth-with-password', {value, valu}).toPromise().then(
//   (response) => {
//     console.log("respuests:",response)
//   }, (error) => {
//     console.error('Error controlado:', error);
//   }
// );