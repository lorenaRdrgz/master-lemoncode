import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginEntity } from '../model';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { NgFor, NgIf } from '@angular/common';
import { MessageService } from '../services/message.service';
// type LoginType = 'student' | 'teacher';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, NgFor, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user!: LoginEntity;
  error: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private messageService: MessageService
  ) {
    this.user = {
      username: '',
      password: ''
    };
  }

  submit() {
    if (this.loginService.login(this.user)) {
      this.error = false;
      this.messageService.send({ key: 'username', value: this.user.username });
      this.messageService.send({ key: 'logged', value: true });
      this.router.navigate(['/dashboard']);
    }
    else {
      this.error = true;
      this.messageService.send({ key: 'username', value: '' });
      this.messageService.send({ key: 'logged', value: false });
    }

  }
}
