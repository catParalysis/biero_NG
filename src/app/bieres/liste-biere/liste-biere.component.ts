import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IListeBiere } from 'src/app/iliste-bieres';
import { ApibieroService } from 'src/app/serv/apibiero.service';
import { AuthServService } from 'src/app/serv/auth-serv.service';
import { IBiere } from '../../iBiere';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogModalComponent } from 'src/app/dialog-modal/dialog-modal.component';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-biere.component.html',
  styleUrls: ['./liste-biere.component.scss']
})
export class ListeBiereComponent implements OnInit, AfterViewInit {

  //mat sort du module pour les colonnes qui sort au clic

  @ViewChild(MatSort) sort: MatSort;

  // le filling des champs de ma table de material design

  produits: MatTableDataSource<IBiere>;

  // formattage des colonnes de la table

  colonne = ['image', 'nom', 'brasserie', 'date_ajout', 'date_modif', 'action'];

  // contructor avec les services, modules et composantes

  constructor(private authServ: AuthServService,
    private apibiero: ApibieroService,
    private dialog: MatDialog,
    private snack: MatSnackBar) {
    authServ.statut().subscribe((statutConnection: boolean) => {
    })

    // le set titre dois etre appelé a chaque changement de page comme ici

    authServ.setTitre("Bieres")

  }


  // j'appelle l'api pour peupler this.produits avec ce que je vais chercher dans la db  
  ngOnInit() {
    this.apibiero.getBieres().subscribe((produit: IListeBiere) => {
      this.produits = new MatTableDataSource(produit.data);
    });
  }


  // ici c'est la que je gère la suppression d'une biere avec un modal de confirmation

  openConfirmationDialog(produitId: number) {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '425px',
      data: `Supprimer cette bière?`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.destroyProduit(produitId);
      }
    });
  }

  // IMPORTANT POUR LE SORT le set timeout est de 450 c'est le moins long que j'ai trouvé qui n'inhibe pas le sort

  ngAfterViewInit() {
    setTimeout(() => {
      this.produits.sort = this.sort;
    }, 450);
  }

  // avec l'api de biero je supprime une bière avec cette fonction et le snackbar pour la rétroaction de 5 secondes

  destroyProduit(id: number) {
    this.apibiero.effacerBiere(id).subscribe(() => {
      this.produits.data = this.produits.data.filter(produit => produit.id_biere !== id);
      this.snack.open("Cette bière a été supprimé de la base de données", "Merci", { duration: 5000 })
    });
  }



}
