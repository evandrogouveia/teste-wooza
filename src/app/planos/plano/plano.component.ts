import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})

export class PlanoComponent implements OnInit {
  valueFromFirstComponent;
  sku = this.actRoute.snapshot.params['sku'];
  plataformaData: any = {};
  plano: any = [];
  
  constructor(
    public apiService: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.valueFromFirstComponent = window.localStorage.getItem('dadosPlano');;
    this.listaPlanosTablet();
  }

  listaPlanosTablet() {
    return this.apiService.getPlanos(this.sku)
    .subscribe((data: {}) => {
      this.plano = data;
    });
  }

  enviaValor(value) {
    this.apiService.sharedValue = value;
    window.localStorage.setItem('dadosPlano', value);
    return this.valueFromFirstComponent;
  }
 
}

