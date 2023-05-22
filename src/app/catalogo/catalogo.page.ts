import { Component, Input, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import PocketBase from 'pocketbase'
import { ProfilePage } from '../profile/profile.page';
import { ProductoService } from '../producto.service';

const pb = new PocketBase('http://127.0.0.1:8090');

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  providers: [ProductoService],
})
export class CatalogoPage implements OnInit {

  resultdata = []
  @Input() pro = []
  
  constructor(
    private http: HttpClient,
    private produc: ProfilePage,
    private po:ProductoService
  ) { }

  //trae dattos del servidor
  //envio dato de id por pagina solucionar
  //[routerLink]="['/profile/' + hero['id']]

  ngOnInit() {

    //Obtengo todos los productos en items
    this.http.get<any>('http://127.0.0.1:8090/api/collections/producto/records')
    .subscribe(res => {
      
      this.resultdata = res.items;   

    })    
  }
}
