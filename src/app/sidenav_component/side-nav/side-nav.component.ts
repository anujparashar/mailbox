import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MailInteractionService } from '../../mail-interaction.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  errors: any;
  inboxList: any;
  inboxReadCount = [];
  inboxReadCountNum: number;
  selectedTabData: any;
  trashMailsData = [];

  constructor(private mailInteractionService: MailInteractionService,private router: Router) { }
  private subscriptions: Subscription[] = [];
  ngOnInit(): void {
    this.getInboxData();
    this.getTrashData();
  }
  // inbox mail details
  getInboxData() {
    this.subscriptions.push(this.mailInteractionService.getInboxFromJson().subscribe((res: any) => {
      this.mailInteractionService.inboxMails.next(res.list);
      this.inboxDtls();
    },
      error => {
        this.errors = error;
      }));
  }

  // fetching inbox mail details from service and unread mail count 
  inboxDtls() {
    this.subscriptions.push(this.mailInteractionService.inboxMails.subscribe((res: any) => {
      this.inboxList = res;
      this.inboxReadCountNum = 0
      this.inboxList.forEach((mail: any) => {
        mail.data.readStatus === 'unread' ? ++this.inboxReadCountNum : '';
      });
    }));
  }

  // setting selected mail data to show on mail list
  getSelectedTabData(selectedTab: String) {
    switch (selectedTab) {
      case 'inbox':
        this.selectedTabData = this.inboxList;
        this.router.navigate(['MailListComponent'])
        break
      case 'trash':
        this.selectedTabData = this.trashMailsData
        this.router.navigate(['MailListComponent']);
        break
    }
    this.mailInteractionService.selectedTabData.next(this.selectedTabData);
  }

  //getting trash mail data
  getTrashData() {
    this.subscriptions.push(this.mailInteractionService.trashMAils.subscribe((res: any) => {
      this.trashMailsData = res;
    }))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
