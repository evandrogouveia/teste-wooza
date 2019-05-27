import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlataformasComponent } from './plataformas/plataformas.component';

import { FormComponent } from './planos/form/form.component';
import { PlanoComponent } from './planos/plano/plano.component';



@NgModule({
  declarations: [
    AppComponent,
    PlataformasComponent,
    PlanoComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
