import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeBiereComponent } from './bieres/liste-biere/liste-biere.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BiereComponent } from './bieres/biere/biere.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EnteteComponent,
    ListeBiereComponent,
    DetailBiereComponent,
    NonTrouveComponent,
    BiereComponent,
    DialogModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
