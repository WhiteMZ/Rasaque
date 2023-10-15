import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router) {
  }

  goPilares(){
    console.log("Here")
    this.router.navigate(['/pilares']);
  }
  goHome(){
    console.log("Here")
    this.router.navigate(['/inicio']);
  }
  goRedes(){
    console.log("Here")
    this.router.navigate(['/redes']);
  }
  goPerfil(){
    console.log("Here")
    this.router.navigate(['/perfil']);
  }

  ngOnInit(): void {
  }
}
