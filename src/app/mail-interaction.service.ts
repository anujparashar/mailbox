import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailInteractionService {
  public inboxPath = '../assets/mail-data/inbox.json';
  inboxMails = new BehaviorSubject([]);
  trashMAils = new BehaviorSubject([]);
  vewCompleteMail = new BehaviorSubject(null);
  selectedTabData = new BehaviorSubject(null)
  constructor(private http: HttpClient) { }

  getInboxFromJson() {
    return this.http.get(this.inboxPath);
  }
}
