import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html'
})
export class GifsComponent{

  @ViewChild('txtBusqueda') txtBusqueda!: ElementRef<HTMLInputElement>;

  constructor(  private gifService: GifsService ) { }
  search(){
    const val = this.txtBusqueda.nativeElement.value
    console.log(val);
    this.gifService.searchGif(val);
  }
  get busquedaResults(){
    return this.gifService.resultados;
  }
}
