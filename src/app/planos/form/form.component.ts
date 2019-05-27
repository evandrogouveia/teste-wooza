import { FormModel } from './../../shared/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  valueFromFirstComponent;
  form: FormModel;

  constructor(
    public apiService: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    this.form = new FormModel();
  }

  ngOnInit() {
    this.valueFromFirstComponent = window.localStorage.getItem('dadosPlano');
  }

  enviar(): void {
    console.log('Dados do Formulário  ', this.form);
    console.log('Dados do Plano Escolhido  ', this.valueFromFirstComponent);
    this.resetForm();
  }
  resetForm() {
    this.form = new FormModel();
  }
}
