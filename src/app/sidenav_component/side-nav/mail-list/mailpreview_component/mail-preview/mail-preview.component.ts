import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MailInteractionService } from 'src/app/mail-interaction.service';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.css']
})
export class MailPreviewComponent implements OnInit {
  inboxRes: any;
  showMail: any;
  trashList = [];
  showFullLengthMail: any;
  showDtl: boolean;
  constructor(private mailInteractionService: MailInteractionService) { }
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    // fetching mails in inbox
    this.subscriptions.push(this.mailInteractionService.inboxMails.subscribe((data: any) => {
      this.inboxRes = data;
    }));
    // fetching details of mail to show it in full view
    this.subscriptions.push(this.mailInteractionService.vewCompleteMail.subscribe((data: any) => {
      // remove deleted mail from full view
      data ? this.showDtl = true : this.showDtl = false;
      this.showFullLengthMail = data;
    }));
  }
  // deleting mail from inbox and moving to trash
  moveToTrash() {
    const indexNum = this.inboxRes.findIndex(element => this.showFullLengthMail.id === element.id);
    const newInboxArr = this.inboxRes.splice(indexNum, 1);
    // updating inbox mail data
    this.mailInteractionService.inboxMails.next(this.inboxRes);
    // setting trash flag in deleted mail
    newInboxArr[0]["isTrash"] = true;
    this.trashList.push(newInboxArr[0]);
    //updating trash mail data
    this.mailInteractionService.trashMAils.next(this.trashList);
    // updating view of deleted mail from full view mode
    this.mailInteractionService.vewCompleteMail.next(null);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
