import { Component, OnInit,EventEmitter} from '@angular/core';
import {Pelicula} from '../model/pelicula';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css'],
  outputs:['eventoAdd','eventoUpdate','eventoDelete'],
  inputs: ['pelicula']
})
export class FormPeliculasComponent implements OnInit {

  private eventoAdd: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  private eventoUpdate: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  private eventoDelete: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  private pelicula: Pelicula;

  constructor() {}

  ngOnInit() {}

  addFilm(pelicula: Pelicula){
    this.eventoAdd.emit(pelicula);
  }
  updateFilm(pelicula: Pelicula){
    this.eventoUpdate.emit(pelicula);
  }
  deleteFilm(pelicula: Pelicula){
    this.eventoDelete.emit(pelicula);
  }
}
