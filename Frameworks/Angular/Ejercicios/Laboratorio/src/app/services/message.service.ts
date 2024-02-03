import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<Message>();

  constructor() { }

  send(message: Message) {
    this.subject.next(message);
  }  

  get(): Observable<Message> {
    return this.subject.asObservable();
  }
}