import { Injectable } from '@angular/core';
import { LoginEntity } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { Message } from '../model/message.model';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient, private messageService: MessageService) { }


  login(user: LoginEntity) {
    if (user.username === 'master@lemoncode.net' && user.password === '12345678') {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    this.messageService.send({ key: 'username', value: '' });
    this.messageService.send({ key: 'logged', value: false });
  }

  isLogged() {
    let logged: boolean = false;
    this.messageService.get()
      .subscribe((result: Message) => {
        if (result.key === 'logged') {
          logged = result.value;
        }
      });
    return logged;
  }

  getUsername(user: LoginEntity) {
    return user.username;
  }
}
