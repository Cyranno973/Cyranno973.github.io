import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreifingComponent } from './plandevol/breifing/breifing.component';
import { PlandevolComponent } from './plandevol/plandevol.component';
import {MassComponent} from './plandevol/mass/mass.component';
import {Leg1Component} from './plandevol/leg1/leg1.component';
import {Leg2Component} from './plandevol/leg2/leg2.component';
import {TdpComponent} from './plandevol/tdp/tdp.component';
import { AdComponent } from './plandevol/ad/ad.component';

const routes: Routes = [

     { path: 'breifing', component: BreifingComponent },
     { path: 'accueil', component: PlandevolComponent },
    { path: 'mass', component: MassComponent },
    { path: 'leg1', component: Leg1Component },
    { path: 'leg2', component: Leg2Component },
    { path: 'tdp', component: TdpComponent },
    { path: 'ad', component: AdComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BreifingComponent, PlandevolComponent,
  MassComponent, Leg1Component, Leg2Component, TdpComponent, AdComponent ];
