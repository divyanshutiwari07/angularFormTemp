import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { EditComponent } from './edit/edit.component';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/first-page'},
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'edit-page', component: EditComponent },
  { path: 'send-email', component: SendEmailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
