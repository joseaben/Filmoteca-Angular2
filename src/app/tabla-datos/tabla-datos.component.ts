import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {

  ascendente: boolean;
  descendente: boolean;
  sinOrden: boolean;
  
  listaDePeliculas = [{title:"Los vengadores",director:"jose",year:"2012"},
                      {title:"Averages 2",director:"jose",year:"2015"},
                      {title:"Fast and furius",director:"jose",year:"2015"},
                      {title:"Wonder Woman",director:"jose",year:"2017"}];
  constructor(){
    this.ascendente = false;
    this.descendente = false;
    this.sinOrden = true;
  }

  ngOnInit() {}

  mostrar():void{
    if(this.descendente){
      this.listaDePeliculas = [{title:"Los vengadores",director:"jose",year:"2012"},
                               {title:"Averages 2",director:"jose",year:"2015"},
                               {title:"Fast and furius",director:"jose",year:"2015"},
                               {title:"Wonder Woman",director:"jose",year:"2017"}];

      this.descendente = false;
      this.sinOrden = true;
    }else if(this.sinOrden){
      this.listaDePeliculas.sort(function(pelicula1,pelicula2){
          if(pelicula1.title < pelicula2.title) return -1;
          if(pelicula1.title > pelicula2.title) return 1
          return 0;
      });
      this.ascendente = true;
      this.sinOrden = false;
      
    }else if(this.ascendente){
      this.descendente = true;
      this.ascendente = false;
      this.listaDePeliculas.sort(function(pelicula1,pelicula2){
          if(pelicula1.title < pelicula2.title) return 1;
          if(pelicula1.title > pelicula2.title) return -1
          return 0;
      });
    }
  }
}
