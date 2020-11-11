import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './sidenav_component/side-nav/side-nav.component';


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
