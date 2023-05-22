import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: any = []

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get<any>('http://127.0.0.1:8090/api/collections/noticias/records')
    .subscribe(res => {
      
      this.noticias = res.items;   

    })  
  }

}
