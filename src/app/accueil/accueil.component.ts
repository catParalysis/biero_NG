import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(private authServ:AuthServService, private snack:MatSnackBar){
    // setteur du titre
    authServ.setTitre("Accueil")
  }
}