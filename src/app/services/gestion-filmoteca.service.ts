import { Injectable } from '@angular/core';
import{Pelicula} from '../model/pelicula'

@Injectable()
export class GestionFilmotecaService {

  private arrayOriginal: Pelicula[];
  private arrayOrdenado: Pelicula[];

  constructor() {
    this.cargaArrayTest();
  }

  getPeliculas(): Pelicula[]{
    return this.arrayOriginal;
  }
  getPelicula(id: number): Pelicula{
      return this.arrayOriginal[id];
  }

  addPelicula(pelicula: Pelicula){
      pelicula.setId = this.arrayOriginal.length + 1;
      this.arrayOriginal.push(pelicula);
      this.arrayOrdenado.push(pelicula);
  }
  updatePelicula(pelicula: Pelicula){
      this.arrayOriginal[(pelicula.getId) - 1] = pelicula;
      for(let pos = 0; pos < this.arrayOrdenado.length;pos++){
        if(this.arrayOrdenado[pos].getId == pelicula.getId){
          this.arrayOrdenado[pos] = pelicula;
          break;
        }
      }
      
  }
  deletePelicula(pelicula: Pelicula){
      this.arrayOriginal.splice(this.arrayOriginal.indexOf(pelicula),1);
       this.arrayOrdenado.splice(this.arrayOrdenado.indexOf(pelicula),1);
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
    this.arrayOriginal = [new Pelicula(1,"Los vengadores","Jose","2012"),
                          new Pelicula(2,"Averages 2", "Jose","2015"),
                          new Pelicula(3,"Fast and furius", "Jose","2015"),
                          new Pelicula(4,"Wonder Woman", "Jose","2017")];

    this.arrayOrdenado = [new Pelicula(1,"Los vengadores","Jose","2012"),
                          new Pelicula(2,"Averages 2", "Jose","2015"),
                          new Pelicula(3,"Fast and furius", "Jose","2015"),
                          new Pelicula(4,"Wonder Woman", "Jose","2017")];
  }


}
