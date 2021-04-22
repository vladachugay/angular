import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

const routs = [
  { path: '', component: HomePageComponent},
  { path: 'contacts', component: ContactsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
