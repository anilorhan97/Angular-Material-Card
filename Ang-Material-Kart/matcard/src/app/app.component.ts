import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'xxxxx',
      imageUrl: '/assets/değişim.jpg',
      username: 'cbdag',
      content: 'asuıdhıouağdpa',
    },
    { title: 'yyyyy',
    imageUrl: '/assets/geldi.jpg',
    username: 'cbdag',
    content: 'sdfghfdsa',
    },
    { title: 'zzzzzz',
    imageUrl: '/assets/tacii.jpg',
    username: 'cbdag',
    content: 'sadfghmn',
    }
  ];
}
