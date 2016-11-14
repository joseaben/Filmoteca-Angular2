import { Injectable } from '@angular/core';
import{Pelicula} from '../model/pelicula'

@Injectable()
export class GestionFilmotecaService {

  private arrayOriginal;
  private arrayOrdenado;

  constructor() {
    this.arrayOriginal =  new Array<Pelicula>();
    this.arrayOrdenado =  new Array<Pelicula>();
    this.cargaArrayTest();
  }

  getPeliculas(): Pelicula[]{
    return this.arrayOriginal;
  }
  getPelicula(id: number): Pelicula{
      return this.arrayOriginal[id];
  }
  addPelicula(pelicula: Pelicula){
      //pelicula.setId = this.arrayOriginal.length;
      this.arrayOriginal.push(pelicula);
  }
  updatePelicula(pelicula: Pelicula){
      this.arrayOriginal[this.arrayOriginal.indexof(pelicula)] = pelicula;
  }
  deletePelicula(id: number){
      this.arrayOriginal.splice(id,1);
  }
  ordenar(orden: string,campo:string): Pelicula[]{
    if(orden == "asc"){
      this.arrayOrdenado.sort((pelicula1,pelicula2)=>{
          if(pelicula1[campo] < pelicula2[campo]) return -1;
          if(pelicula1[campo] > pelicula2[campo]) return 1
          return 0;
      });
    }else{
      this.arrayOrdenado.sort((pelicula1,pelicula2)=>{
          if(pelicula1[campo] < pelicula2[campo]) return 1;
          if(pelicula1[campo] > pelicula2[campo]) return -1
          return 0;
      });
    }
    return this.arrayOrdenado;
  }
  private cargaArrayTest(){
    this.arrayOriginal = [{title:"Los vengadores",director:"jose",year:"2012"},
                      {title:"Averages 2",director:"jose",year:"2015"},
                      {title:"Fast and furius",director:"jose",year:"2015"},
                      {title:"Wonder Woman",director:"jose",year:"2017"}];

    this.arrayOrdenado = [{title:"Los vengadores",director:"jose",year:"2012"},
                      {title:"Averages 2",director:"jose",year:"2015"},
                      {title:"Fast and furius",director:"jose",year:"2015"},
                      {title:"Wonder Woman",director:"jose",year:"2017"}];
  }


}
