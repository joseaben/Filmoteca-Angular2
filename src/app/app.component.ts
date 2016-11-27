import { Component } from '@angular/core';
import{Pelicula} from './model/pelicula'
import {GestionFilmotecaService} from './services/gestion-filmoteca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GestionFilmotecaService]
})
export class AppComponent {
  title = 'Filmoteca';
  private arrayPelis: Pelicula[];
  private peliculaSeleccionada: Pelicula;
  
  constructor(private gestionFilmoteca: GestionFilmotecaService) {
    this.arrayPelis = this.gestionFilmoteca.getPeliculas();
    this.peliculaSeleccionada = new Pelicula();
  }
  addPelicula(pelicula: Pelicula){
    this.gestionFilmoteca.addPelicula(pelicula);
    this.arrayPelis = this.gestionFilmoteca.getPeliculas();
  }
  updatePelicula(pelicula: Pelicula){
    this.gestionFilmoteca.updatePelicula(pelicula);
    this.arrayPelis = this.gestionFilmoteca.getPeliculas();
  }
  deletePelicula(pelicula: Pelicula){
    this.gestionFilmoteca.deletePelicula(pelicula);
    this.arrayPelis = this.gestionFilmoteca.getPeliculas();
  }
  ordenarTabla(args: string[]){
    if(args[0] == "sinOrden"){
      this.arrayPelis = this.gestionFilmoteca.getPeliculas();
    }else{
      this.arrayPelis = this.gestionFilmoteca.ordenar(args[0],args[1]);
    }
  }
  cargarEnFormulario(pelicula: Pelicula){
    this.peliculaSeleccionada = pelicula;
  }


}
