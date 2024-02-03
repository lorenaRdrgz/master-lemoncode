import { Injectable } from '@angular/core';
import { LoginEntity } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private http: HttpClient) { }
  
  logged:boolean=false;

  login(user: LoginEntity) {
    if (user.username === 'master@lemoncode.net' && user.password === '12345678') {
      this.logged = true;
      return true;
    }
    else {
      this.logged = false;
      return false;
    }
  }

  logout(){
    this.logged = false;
  }

  isLogged(){
    return this.logged;
  }

  getUsername(user: LoginEntity){
    return user.username;
  }
}
