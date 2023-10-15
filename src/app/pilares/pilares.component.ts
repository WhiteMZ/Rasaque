import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pilares',
  templateUrl: './pilares.component.html',
  styleUrls: ['./pilares.component.css']
})
export class PilaresComponent {
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
