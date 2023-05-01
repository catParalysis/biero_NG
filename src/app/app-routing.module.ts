import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { BiereComponent } from './bieres/biere/biere.component';
import { GardienRouteGuard } from './gardien-route.guard';
import { ListeBiereComponent } from './bieres/liste-biere/liste-biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { AuthServService } from './serv/auth-serv.service';

const routes: Routes = [
  { path:"", component:AccueilComponent},
  { path:"bieres", component:ListeBiereComponent, canActivate:[()=>inject(AuthServService).statut()]},
  { path:"biere/:id", component:DetailBiereComponent, canActivate:[()=>inject(AuthServService).statut()]},
  { path:"new-biere", component:BiereComponent, canActivate:[()=>inject(AuthServService).statut()]},
  { path:"accueil", redirectTo:""},
  { path:"**", component:NonTrouveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
