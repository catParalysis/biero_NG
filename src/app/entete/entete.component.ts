import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent {
  estConnecte:boolean;
  titre:string = "";
  
// constructor avec les services

  constructor(private authServ:AuthServService, private route:ActivatedRoute){
    this.estConnecte = this.authServ.verifConnection();
    this.authServ.getTitre().subscribe((titre)=>{
      this.titre = titre;
    })
    
  }

  ngOnInit() {
    
  }



  seConnecter() {
    this.authServ.changeConnection(this.estConnecte);
  }

}
