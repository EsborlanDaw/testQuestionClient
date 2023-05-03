import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComenzarJuegoComponent } from './component/jugar/comenzarJuego/comenzarJuego.component';

const routes: Routes = [ 
  { path: 'jugar', component: ComenzarJuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
