import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlataformasComponent } from './plataformas/plataformas.component';
import { PlanoComponent } from './planos/plano/plano.component';
import { FormComponent } from './planos/form/form.component';

const routes: Routes = [
  { path: 'plataformas', component: PlataformasComponent },
  { path: 'plataformas/planos/:sku', component: PlanoComponent },
  { path: 'plataformas/planos/form/:sku', component: FormComponent },

  { path: '', pathMatch: 'full', redirectTo: 'plataformas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
