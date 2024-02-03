import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

}
