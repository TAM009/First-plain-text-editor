import { EditorComponent } from './../../helpers/editor/editor.component';
import { Http } from '@angular/http';
import {Component, OnInit} from '@angular/core';
import { Post } from "../post";
import {Router, ActivatedRoute, Params} from "@angular/router";
//import post = Http.post;
import {Observable} from "rxjs";
import {Category} from "../category.model"; // this thanks to Webstorm :)


@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: []
})

export class PostFormComponent implements OnInit {


  post: Post = new Post();

  errorMessage = "";
  loading = false;
  defaultBodyValue: string = "";

  categories: Category[] = [];


  constructor(
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onBodyTextEditorKeyUp(textValue){

    this.post.body = textValue;
  }

}
