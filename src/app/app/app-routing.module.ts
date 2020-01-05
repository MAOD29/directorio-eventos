import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from '../pages/event/event.component'
import {PortadaComponent} from '../components/portada/portada.component'
import { BusinessComponent} from '../pages/business/business.component'


const routes: Routes = [
  {path:"eventos",component:EventComponent},
  {path:"inicio",component:PortadaComponent},
  {path:"negocios",component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

