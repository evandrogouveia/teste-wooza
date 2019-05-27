import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  plataformas: any = [];

  constructor(
    public apiService: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.listaPlataformas();
  }

  listaPlataformas() {
    return this.apiService.getPlataformas()
    .subscribe((data: {}) => {
      this.plataformas = data;
    });
  }

  enviaValor(value) {
    window.localStorage.setItem('dadosPlano', value);
    this.apiService.sharedValue = value;
  }
}
