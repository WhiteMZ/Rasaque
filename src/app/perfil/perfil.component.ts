import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
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
