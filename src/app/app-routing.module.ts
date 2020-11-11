import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftComponent } from './sidenav_component/side-nav/draft_mails/draft/draft.component';
import { MailListComponent } from './sidenav_component/side-nav/maillist_component/mail-list/mail-list.component';
import { MailPreviewComponent } from './sidenav_component/side-nav/maillist_component/mail-list/mailpreview_component/mail-preview/mail-preview.component';
import { SentMailsComponent } from './sidenav_component/side-nav/sent_mails/sent-mails/sent-mails.component';
import { SideNavComponent } from './sidenav_component/side-nav/side-nav.component';


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children:[
      {
        path:'',
      redirectTo: 'MailListComponent',
      pathMatch: "full"
      },
      {
        path:'MailListComponent',
        component:MailListComponent,
        children:[
          {
            path:'MailPreviewComponent',
            component:MailPreviewComponent
          }
        ]
      },
      {
        path:'DraftComponent',
        component:DraftComponent
      },
      {
        path:'SentMailsComponent',
        component:SentMailsComponent
      }
    ]
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
