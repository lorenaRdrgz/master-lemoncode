import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

class Imagen {
  id: number;
  src: string;
  title: string;
  constructor() {
    this.id = 0;
    this.src = '';
    this.title = '';
  }
}
@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIf,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent {
  listaImagenes: Imagen[] = [];
  listaIndexMiniaturas: any[] = [];
  imagenSeleccionada: Imagen = new Imagen();
  play: boolean = false;
  width: number = 400;
  heigth: number = 250;

  constructor() {
    this.listaImagenes.push({ id: 1, src: '../../../assets/pictures/1.jpg', title: 'paisaje 1' });
    this.listaImagenes.push({ id: 2, src: '../../../assets/pictures/2.jpg', title: 'paisaje 2' });
    this.listaImagenes.push({ id: 3, src: '../../../assets/pictures/3.jpg', title: 'paisaje 3' });
    this.listaImagenes.push({ id: 4, src: '../../../assets/pictures/4.jpg', title: 'paisaje 4' });
    this.listaImagenes.push({ id: 5, src: '../../../assets/pictures/5.jpg', title: 'paisaje 5' });
    this.listaImagenes.push({ id: 6, src: '../../../assets/pictures/6.jpg', title: 'paisaje 6' });
    this.listaImagenes.push({ id: 7, src: '../../../assets/pictures/7.jpg', title: 'paisaje 7' });
    this.listaImagenes.push({ id: 8, src: '../../../assets/pictures/8.jpg', title: 'paisaje 9' });

    this.imagenSeleccionada = this.listaImagenes[0];

    this.listaIndexMiniaturas = [{id:0},{id:1},{id:2}];
  }

  onImageClick(imagen: Imagen) {
    this.imagenSeleccionada = imagen;
  }

  onImageNext() {
    let index = this.imagenSeleccionada.id;

    if (index > 7) {
      index = 0;
    }

    this.listaIndexMiniaturas.forEach(x=>{
      x.id++;
      if (x.id > 7) {
        x.id = 0;
      }
    });

    this.imagenSeleccionada = this.listaImagenes[index];
  }

  onImagePreviuos() {
    let index = this.imagenSeleccionada.id - 2;

    if (index < 0) {
      index = 7;
    }

    this.listaIndexMiniaturas.forEach(x=>{
      x.id--;
      if (x.id < 0) {
        x.id = 7;
      }
    });
    
    this.imagenSeleccionada = this.listaImagenes[index];
  }

  onImagePlayStop() {
    this.play = !this.play;
    if (this.play) {
      setTimeout(this.onImageNext, 500);
    }
  }

  onImageSize(aumenta: boolean) {
    if (aumenta) {
      this.width = this.width + 10;
      this.heigth = this.heigth + 5;
    }
    else {
      this.width = this.width - 10;
      this.heigth = this.heigth - 5;
    }

    console.log(this.width);
    console.log(this.heigth);
  }

}
