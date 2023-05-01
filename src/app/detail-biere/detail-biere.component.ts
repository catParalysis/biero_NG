import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApibieroService } from '../serv/apibiero.service';
import { AuthServService } from '../serv/auth-serv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBiere } from '../iBiere';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogModalComponent } from 'src/app/dialog-modal/dialog-modal.component';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-biere.component.html',
  styleUrls: ['./detail-biere.component.scss']
})
export class DetailBiereComponent {

  //initiation des variables de la composante

  biere: IBiere;
  formModification: FormGroup;
  produitId: number;

  // contructor avec les services, modules et composantes

  constructor(private authServ: AuthServService,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private apibiero: ApibieroService,
    private snack: MatSnackBar) {

    // le set titre dois etre appelé a chaque changement de page comme ici

    authServ.setTitre("Détail/Modifier")

  }

  // j'appelle l'api pour peupler les champs du détail et j'initie le form (new FormGroup) pour les validations

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.apibiero.getBiere(params['id']).subscribe((data) => {
        this.biere = data;
        this.produitId = params['id'];
        this.formModification = new FormGroup({
          id_biere: new FormControl(this.biere.id_biere),
          nom: new FormControl(this.biere.nom, [Validators.required, Validators.minLength(3)]),
          brasserie: new FormControl(this.biere.brasserie, [Validators.required, Validators.minLength(3)]),
          description: new FormControl(this.biere.description, [Validators.required]),
          image: new FormControl(this.biere.image),
        });
        const formValues = {
          id_biere: this.biere.id_biere,
          nom: this.biere.nom,
          brasserie: this.biere.brasserie,
          description: this.biere.description,
          image: this.biere.image,
        };
        this.formModification.setValue(formValues);
      });
    });
  }

  // ici c'est l'envois a la db par l'api et la rétroaction de 5 secondes

  submit() {
    this.biere = this.formModification.value;
    this.apibiero.modifierBiere(this.biere).subscribe((data) => {
      this.snack.open("Cette bière a été modifiée avec succès", "Merci", { duration: 5000 })
    });
  }

  annuler() {
    this.formModification.setValue(this.biere);
  }


  // ici c'est la que je gère la suppression d'une biere avec un modal de confirmation

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: `Supprimer cette bière de la base de donnés?`, width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.destroyProduit();
        this.snack.open("Cette bière a été supprimé de la base de données", "Merci", { duration: 5000 })
      }
    });
  }

  // avec l'api de biero je supprime une bière avec cette fonction et le snackbar pour la rétroaction de 5 secondes

  destroyProduit() {
    this.apibiero.effacerBiere(this.biere.id_biere).subscribe((data) => {
      this.router.navigate(['/bieres']);
    });
  }

}
