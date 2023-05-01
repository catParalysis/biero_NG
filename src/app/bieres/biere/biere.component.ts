import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBiere } from 'src/app/iBiere';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApibieroService } from 'src/app/serv/apibiero.service';
import { AuthServService } from '../../serv/auth-serv.service';

@Component({
  selector: 'app-produit',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.scss']
})

export class BiereComponent {
//declaration des variables
  biere: IBiere;
  formAjout: FormGroup;
  produitId: number;


  @Input() uneBiere: IBiere;
//j'appelle les composantes, modules et services nécéssaires 
  constructor(private apibiero: ApibieroService,
    private authServ: AuthServService,
    private router: Router,
    private dialog: MatDialog,
    private snack: MatSnackBar,) {
    authServ.setTitre("Créer Biere")
  }


  // les validations du form dans le init de la composante 
  ngOnInit() {
    this.formAjout = new FormGroup({
      nom: new FormControl("", [Validators.required, Validators.minLength(5)]),
      description: new FormControl("", [Validators.required]),
      brasserie: new FormControl("", [Validators.required, Validators.minLength(2)]),
      image: new FormControl(""),
    })

  }

// Fonctions de l'api que j'appelle par le formulaire avec le snackbar pour une rétroaction de 5 secondes

  ajoutBiere() {
    this.uneBiere = this.formAjout.value;
    this.apibiero.ajouterBiere(this.uneBiere).subscribe((data) => {
      this.snack.open("Nouvelle bière créée avec succès", "Merci", { duration: 5000 })
    });
  }

}
