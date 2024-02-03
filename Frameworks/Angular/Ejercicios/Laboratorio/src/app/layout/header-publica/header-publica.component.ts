import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header-publica',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './header-publica.component.html',
  styleUrl: './header-publica.component.css'
})

export class HeaderPublicaComponent{

}
