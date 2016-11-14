import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../model/pelicula';
import {GestionFilmotecaService} from '../services/gestion-filmoteca.service';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css'],
  providers:[GestionFilmotecaService]
})
export class FormPeliculasComponent implements OnInit {

  private pelicula: Pelicula;
  private enviarRenderizado: boolean;

  constructor(private gestionFilmoteca: GestionFilmotecaService) {
    this.pelicula = new Pelicula();
  }
  addFilm(formulario: any){
    this.gestionFilmoteca.addPelicula(this.pelicula);
    this.enviarRenderizado = true;
  }
  updateFilm(formulario: any){
    /*let peli: Pelicula = new Pelicula();
    peli.setDirector="Jose";
    peli.setTitle="hola";
    peli.setYear="1002";

    this.pelicula = peli;*/
  }

peliculaRecibida(pelicula: Pelicula){
  this.pelicula = pelicula;
}


  ngOnInit() {
  }

}
