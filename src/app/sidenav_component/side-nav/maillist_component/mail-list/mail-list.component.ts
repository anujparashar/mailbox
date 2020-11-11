import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MailInteractionService } from 'src/app/mail-interaction.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  // @Input('selectedTabData') selectedTabData: any;
  inboxmailDtl = [];
  showFullLengthMail: any;
  isSelected: boolean;
  trashMailDtl = [];
  selectedTabData: any;
  constructor(private mailInteractionService: MailInteractionService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.mailInteractionService.selectedTabData.subscribe((res: any) => {
      this.selectedTabData = res;
    }))
    // getting inbox mail updated details 
    this.subscriptions.push(this.mailInteractionService.inboxMails.subscribe((data: any) => {
      this.inboxmailDtl = data;
    }));
  }
  // updating full view mode of mail and setting read reciept after opening the mail.
  showFullMail(res: any) {
    this.router.navigate(['MailPreviewComponent'],
      { relativeTo: this.activatedRoute })
    this.mailInteractionService.vewCompleteMail.next(res);
    if (!res.isTrash) {
      const indexNum = this.inboxmailDtl.findIndex(element => res.id === element.id);
      this.inboxmailDtl[indexNum].data.readStatus = "read";
      this.mailInteractionService.inboxMails.next(this.inboxmailDtl);
    }

  }
  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
