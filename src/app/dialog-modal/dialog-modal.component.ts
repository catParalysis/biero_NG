import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-confirmation-dialog',

  // template de la boite de dialog

  template: `
    <h3 mat-dialog-title>Confirmation</h3>
    <mat-dialog-content>{{ data }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="warn" [mat-dialog-close]="'confirm'">Confirmer</button>
      <button mat-button color="primary" mat-dialog-close>Annuler</button>
    </mat-dialog-actions>
  `})



export class DialogModalComponent {
  constructor(public dialogRef: MatDialogRef<DialogModalComponent>, // Référence à la boîte de dialogue ci-haut
              @Inject(MAT_DIALOG_DATA) public data: string) {} //Données à afficher dans la boîte de dialogue envoyé quand j'appelle @ConfirmationDialogComponent
}

//sources https://material.angular.io/components/dialog et aide de chatGPT 