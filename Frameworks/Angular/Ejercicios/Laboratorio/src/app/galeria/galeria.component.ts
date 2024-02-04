import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

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
    MatIconModule,
    NgClass,
    SlicePipe
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent {
  listaImagenes: Imagen[] = [];
  imagenSeleccionada: Imagen = new Imagen();
  play: boolean = false;
  width: number = 400;
  heigth: number = 250;
  grades: number = 0;
  start: number = 0;
  end: number = 3;

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
  }

  onImageClick(imagen: Imagen) {
    this.imagenSeleccionada = imagen;

    if (imagen.id > 5) {
      this.start = 5;
      this.end = 8;
    }
    else if (imagen.id == 1) {
      this.start = 0;
      this.end = 3;
    }
    else {
      this.start = imagen.id - 1;
      this.end = imagen.id + 2;
    }
  }

  onImageNext() {
    let index = this.imagenSeleccionada.id;
    if (index > 5) {
      this.start = 5;
      this.end = 8;
    }
    else {
      this.start++;
      this.end++;
    }
    this.imagenSeleccionada = this.listaImagenes[index];
  }

  onImagePreviuos() {
    let index = this.imagenSeleccionada.id - 2;

    if (index < 1) {
      this.start = 0;
      this.end = 3;
    }
    else {
      this.start--;
      this.end--;
    }

    this.imagenSeleccionada = this.listaImagenes[index];
  }

  onImagePlayStop() {
    this.play = !this.play;
    console.log(this.play)
    if (this.play) {
      setTimeout(() => {
        this.onImageNext();
      }, 1000);
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
  }

  onImageRotate() {
    this.grades = this.grades + 10;
  }

}
