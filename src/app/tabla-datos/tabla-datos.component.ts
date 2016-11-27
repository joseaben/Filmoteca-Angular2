import { Component, OnInit, EventEmitter} from '@angular/core';
import {Pelicula} from '../model/pelicula';
@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css'],
  inputs: ['peliculas'],
  outputs: ['eventoEmitidoOrdenar','eventoEmitidoSeleccionar']
})
export class TablaDatosComponent implements OnInit {

  private peliculas: Pelicula[];
  private orden: string;

  private eventoEmitidoOrdenar: EventEmitter<string[]> = new EventEmitter<string[]>();
  private eventoEmitidoSeleccionar: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor(){
    this.orden = "-1";
  }
  ngOnInit() {}
  
  ordenar(campoTabla: string):void{
    if(this.orden.substring(1) != campoTabla){
      this.orden = "-1";
    }
    if(this.orden.substring(0,2) == "-1"){
      this.orden = "0" + campoTabla;
      this.eventoEmitidoOrdenar.emit(["asc",campoTabla]);
    }else if(this.orden.substring(0,1) == "0"){
      this.orden = "1" + campoTabla;
      this.eventoEmitidoOrdenar.emit(["desc",campoTabla]);
    }else if(this.orden.substring(0,1) == "1"){
      this.orden = "-1" + campoTabla;
      this.eventoEmitidoOrdenar.emit(["sinOrden",campoTabla]);
    }
  }
  seleccionarPelicula(pelicula: Pelicula){
    this.eventoEmitidoSeleccionar.emit(pelicula);

  }
}
