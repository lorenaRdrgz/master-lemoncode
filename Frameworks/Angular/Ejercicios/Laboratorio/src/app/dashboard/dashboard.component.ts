import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(){
  }
}
