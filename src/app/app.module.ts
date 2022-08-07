import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'reader-list', component:ReaderListComponent},
  {path:'searchbooks', component:SearchbooksComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    ReaderListComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes),MatToolbarModule,
    MatButtonModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
