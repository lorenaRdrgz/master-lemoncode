import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginEntity } from '../model';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'
import { NgFor, NgIf } from '@angular/common';
import { MessageService } from '../services/message.service';
// type LoginType = 'student' | 'teacher';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  editForm!: FormGroup;
  usernameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createEditForm();
  }
  createEditForm(): void {
    this.editForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.usernameControl = this.editForm.get('username') as FormControl;
    this.passwordControl = this.editForm.get('password') as FormControl;
  }

  submit(): void {
    const user = this.editForm.value;

    if (this.loginService.login(user)) {
      this.error = false;
      let username = user.username;
      this.messageService.send({ key: 'username', value: username });
      this.messageService.send({ key: 'logged', value: true });
      this.router.navigate(['/dashboard', username]);
    }
    else {
      this.error = true;
      this.messageService.send({ key: 'username', value: '' });
      this.messageService.send({ key: 'logged', value: false });
    }

  }
}
