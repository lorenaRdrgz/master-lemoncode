import { Component, Input, OnInit } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';

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
  username: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => this.username = params['user']);
  }
}
