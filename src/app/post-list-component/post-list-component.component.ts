import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts;

  constructor() {

   }

  nomCompo = 'je suis dans le component';

  ngOnInit() {

  }
}
