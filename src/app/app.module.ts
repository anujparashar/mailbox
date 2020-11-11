import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './sidenav_component/side-nav/side-nav.component';
import { MailListComponent } from './sidenav_component/side-nav/maillist_component/mail-list/mail-list.component';
import { MailPreviewComponent } from './sidenav_component/side-nav/maillist_component/mail-list/mailpreview_component/mail-preview/mail-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer_Component/footer/footer.component';
import { ComposeMailComponent } from './sidenav_component/side-nav/composemail_Component/compose-mail/compose-mail.component';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './sidenav_component/side-nav/draft_mails/draft/draft.component';
import { SentMailsComponent } from './sidenav_component/side-nav/sent_mails/sent-mails/sent-mails.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MailListComponent,
    MailPreviewComponent,
    FooterComponent,
    ComposeMailComponent,
    DraftComponent,
    SentMailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
