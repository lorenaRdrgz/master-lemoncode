import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-privada',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './header-privada.component.html',
  styleUrl: './header-privada.component.css'
})

export class HeaderPrivadaComponent{


}
