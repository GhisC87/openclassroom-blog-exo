import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Mon blog';
  public posts: Post[] = [];

  constructor() {}

  ngOnInit() {
    this.posts.push(
      new Post('Mon premier post', 0,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis.
        Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo,
        vel sodales nunc leo id elit. Etiam tempor fringilla mi, nec bibendum tellus pharetra a`),
      new Post('Mon deuxième post', 0,
        `Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis.
        vel sodales nunc leo id elit. Etiam tempor fringilla mi, nec bibendum tellus pharetra a`),
      new Post('Encore un post', 0,
        `Etiam tempor fringilla mi, nec bibendum tellus pharetra a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis. Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo,
        vel sodales nunc leo id elit. `)
    );
  }
}
