import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../model/pelicula';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css']
})
export class FormPeliculasComponent implements OnInit {

  private pelicula: Pelicula;
  constructor() { 
    this.pelicula = new Pelicula();
  }
  addFilm(formulario: any){
    console.log(this.pelicula.getTitle);
    console.log(formulario);
    this.pelicula.setTitle = "Esto esta chulo";
  }
  updateFilm(formulario: any){
    let peli: Pelicula = new Pelicula();
    peli.setDirector="Jose";
    peli.setTitle="hola";
    peli.setYear="1002";

    this.pelicula = peli;
  }

  

  ngOnInit() {
  }

}
