import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  orden: any = [];
  
  constructor(private http:HttpClient) { }


  ngOnInit() {

    //Obtengo todos los productos en items
    this.http.get<any>('http://127.0.0.1:8090/api/collections/orden/records')
    .subscribe(res => {
      
      this.orden = res.items;   

    })  
  }

}
