import {BrowserModule} from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import { PostFormComponent } from './blog/post-form/post-form.component';
import { EditorComponent } from './helpers/editor/editor.component';



const appRoutes: Routes = [
 
];


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
