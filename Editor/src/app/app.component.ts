import {Component, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Subject} from "rxjs";
import { EditorComponent } from './helpers/editor/editor.component';
import { Http } from '@angular/http';
import { Post } from "./post";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
//import {Category} from "../category.model";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  post: Post = new Post();
  defaultBodyValue: string = "";  

  onBodyTextEditorKeyUp(textValue) {
        this.post.body = textValue;
      }

  ngOnInit()
  {}

}
