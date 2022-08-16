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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SubscribedbooksComponent } from './subscribedbooks/subscribedbooks.component';
import { GetsubscribedbooksComponent } from './getsubscribedbooks/getsubscribedbooks.component';
import {MatMenuModule} from '@angular/material/menu';
import { AuthGuard } from './auth.guard';
const routes:Routes=[
  {path:'reader-list', component:ReaderListComponent},
  {path:'searchbooks', component:SearchbooksComponent},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"updatebook", component:UpdatebookComponent, canActivate:[AuthGuard]},
  {path:"book", component:BookComponent, canActivate:[AuthGuard]},
  {path:"subscribedbooks", component:SubscribedbooksComponent},
  {path:"getsubscribedbooks", component:GetsubscribedbooksComponent}
 
 




]


@NgModule({
  declarations: [
    AppComponent,
    ReaderListComponent,
    SearchbooksComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    DashboardComponent,
    UpdatebookComponent,
    SubscribedbooksComponent,
    GetsubscribedbooksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes),MatToolbarModule,
    MatButtonModule,MatIconModule,FormsModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
