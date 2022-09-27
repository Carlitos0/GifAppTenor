import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor( private http: HttpClient ) { }

  private urlApi: string = 'https://tenor.googleapis.com/v2'
  private apikey: string = 'AIzaSyAXH_6j2YHcZSZ3ApKKm-MAk-3mwTbA4fE';
  private results: any[] = [];

  get resultados(){
    return [...this.results];
  }

  searchGif( termino: string ){
    const url = `${this.urlApi}/search?key=${this.apikey}&q=${termino}&client_key=My First Project&country=604`
    this.http.get(url)
      .subscribe((rs:any) => {
        this.results = rs.results;
        console.log(this.resultados)
      })
  }
}
