import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu-publico',
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './menu-publico.component.html',
  styleUrl: './menu-publico.component.css'
})

export class MenuPublicoComponent implements OnInit {
  logged: boolean = true;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    // this.logged = this.loginService.isLogged();
  }
}
