import { Component } from '@angular/core';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-non-trouve',
  templateUrl: './non-trouve.component.html',
  styleUrls: ['./non-trouve.component.scss']
})
export class NonTrouveComponent {

  titre:string = "";

  constructor(private authServ:AuthServService){
    authServ.setTitre("Ooops on vous à perdu!")
    
  }

}
