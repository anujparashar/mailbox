import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MailListComponent } from './side-nav/mail-list/mail-list.component';
import { MailPreviewComponent } from './side-nav/mail-list/mail-preview/mail-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ComposeMailComponent } from './side-nav/compose-mail/compose-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MailListComponent,
    MailPreviewComponent,
    FooterComponent,
    ComposeMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
