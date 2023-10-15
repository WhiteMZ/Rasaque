import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  constructor(private router:Router) {
  }

  goPilares(){
    this.router.navigate(['/pilares']);
  }
  goHome(){
    this.router.navigate(['/inicio']);
  }
  goRedes(){
    this.router.navigate(['/redes']);
  }
  goPerfil(){
    this.router.navigate(['/perfil']);
  }
}
