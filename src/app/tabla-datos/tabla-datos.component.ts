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
  listaDePeliculas: Pelicula[];

  /*listaDePeliculas = [{title:"Los vengadores",director:"jose",year:"2012"},
                      {title:"Averages 2",director:"jose",year:"2015"},
                      {title:"Fast and furius",director:"jose",year:"2015"},
                      {title:"Wonder Woman",director:"jose",year:"2017"}];*/
  constructor(private gestionFilmoteca: GestionFilmotecaService){
    this.ascendente = false;
    this.descendente = false;
    this.sinOrden = true;
    this.listaDePeliculas = this.gestionFilmoteca.getPeliculas();
  }

  ngOnInit() {}

  mostrar():void{
    if(this.descendente){
      this.listaDePeliculas =this.gestionFilmoteca.getPeliculas();
      this.descendente = false;
      this.sinOrden = true;
    }else if(this.sinOrden){
      this.listaDePeliculas = this.gestionFilmoteca.ordenar("asc");
      this.ascendente = true;
      this.sinOrden = false;
      
    }else if(this.ascendente){
      this.listaDePeliculas = this.gestionFilmoteca.ordenar("desc");
      this.descendente = true;
      this.ascendente = false;
    }
  }
}
