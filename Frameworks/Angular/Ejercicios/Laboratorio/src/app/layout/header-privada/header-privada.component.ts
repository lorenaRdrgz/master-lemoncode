import { Component, Input, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '../../services/message.service';
import { LoginService } from '../../services/login.service';
import { Message } from '../../model/message.model';


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
  @Input() username!: string;

  constructor(private router: Router, private loginService: LoginService) {

  }

  salir() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
