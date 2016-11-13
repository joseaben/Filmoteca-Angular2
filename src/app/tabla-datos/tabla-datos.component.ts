import { Component, OnInit } from '@angular/core';
import {GestionFilmotecaService} from '../services/gestion-filmoteca.service';
import {Pelicula} from '../model/pelicula';
@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css'],
  providers: [GestionFilmotecaService]
})
export class TablaDatosComponent implements OnInit {

  ascendente: boolean;
  descendente: boolean;
  sinOrden: boolean;
  campo: string;
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
}
