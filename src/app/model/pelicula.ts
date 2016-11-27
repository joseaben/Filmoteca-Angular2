export class Pelicula {
    private id: number;
    private title: string;
    private director: string;
    private year: string;

    constructor(id?: number,title?: string,director?: string, year?: string){
        if(id && title && director && year ){
            this.id = id;
            this.title = title;
            this.director = director;
            this.year = year;
        }
    }

    get getId(): number{
        return this.id;
    } 
    set setId(id: number){
        this.id = id;
    }
    get getTitle(): string{
        return this.title;
    } 
    set setTitle(title: string){
        this.title = title;
    }
    get getDirector(): string{
        return this.director;
    } 
    set setDirector(director: string){
        this.director = director;
    }
    get getYear(): string{
        return this.year;
    } 
    set setYear(year: string){
        this.year = year;
    }

}
