import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu-privado',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './menu-privado.component.html',
  styleUrl: './menu-privado.component.css'
})

export class MenuPrivadoComponent implements OnInit {
  logged: boolean = true;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    // this.logged = this.loginService.isLogged();
  }
}
