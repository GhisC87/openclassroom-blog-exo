import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent{

  @Input() posts: Post[];

  constructor() {}

}
