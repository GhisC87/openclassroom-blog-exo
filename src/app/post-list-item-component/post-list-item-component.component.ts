import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent {

  @Input() post: Post;

  constructor() {}

  public onLoveButton() {
    this.changeLoveItsValue(1);
  }
  public onDislikeButton() {
    this.changeLoveItsValue(-1);
  }
  private changeLoveItsValue(valeur: number) {
    this.post.loveIts += valeur;
  }
}
