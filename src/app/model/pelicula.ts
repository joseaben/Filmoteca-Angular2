export class Pelicula {
    private id: number;
    private title: string;
    private director: string;
    private synopsis: string;
    private year: string;


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
    get getSynopsis(): string{
        return this.synopsis;
    } 
    set setSynopsis(synopsis: string){
        this.synopsis = synopsis;
    }
    get getYear(): string{
        return this.year;
    } 
    set setYear(year: string){
        this.year = year;
    }

}
