import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent {

}
