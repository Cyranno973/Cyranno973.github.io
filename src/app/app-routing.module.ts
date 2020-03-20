import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreifingComponent } from './plandevol/breifing/breifing.component';
import { PlandevolComponent } from './plandevol/plandevol.component';


const routes: Routes = [

     { path: 'breifing', component: BreifingComponent },
     { path: 'accueil', component: PlandevolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BreifingComponent, PlandevolComponent];
