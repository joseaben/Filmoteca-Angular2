import { Component, OnInit, EventEmitter,Input } from '@angular/core';
import {GestionFilmotecaService} from '../services/gestion-filmoteca.service';
import {Pelicula} from '../model/pelicula';
@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css'],
  outputs:['eventoEnviarPelicula'],
  providers: [GestionFilmotecaService]

})
export class TablaDatosComponent implements OnInit {

  ascendente: boolean;
  descendente: boolean;
  sinOrden: boolean;
  campo: string;
  @Input() private renderizar: boolean;
  private eventoEnviarPelicula: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  listaDePeliculas: Pelicula[];


  constructor(private gestionFilmoteca: GestionFilmotecaService){
    this.ascendente = false;
    this.descendente = false;
    this.sinOrden = true;
    this.campo = null;

    this.listaDePeliculas = this.gestionFilmoteca.getPeliculas();
  }

  ngOnInit() {}

  ordenar(campoTabla: string):void{
    console.log(this.renderizar);
    this.campo = campoTabla;
    if(this.descendente){
      this.listaDePeliculas =this.gestionFilmoteca.getPeliculas();
      this.descendente = false;
      this.sinOrden = true;
    }else if(this.sinOrden){
      this.listaDePeliculas = this.gestionFilmoteca.ordenar("asc",campoTabla);
      this.ascendente = true;
      this.sinOrden = false;

    }else if(this.ascendente){
      this.listaDePeliculas = this.gestionFilmoteca.ordenar("desc",campoTabla);
      this.descendente = true;
      this.ascendente = false;
    }
  }
  enviarNotificacion(pelicula: Pelicula){
     this.eventoEnviarPelicula.emit(pelicula);
  }
}
