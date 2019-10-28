import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog';
  nombreAuPif = 10;

  posts = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis. Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo, vel sodales nunc leo id elit. Etiam tempor fringilla mi, nec bibendum tellus pharetra a. ',
      loveIts: Number,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis. Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo, vel sodales nunc leo id elit. Etiam tempor fringilla mi, nec bibendum tellus pharetra a. ',
      loveIts: Number,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui lacus. Proin sollicitudin quis nisi et mattis. Cras dapibus, nisl sed vehicula hendrerit, quam dui posuere leo, vel sodales nunc leo id elit.',
      loveIts: Number,
      created_at: new Date()
    }
  ];
}
