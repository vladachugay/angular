import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      title: 'LESS',
      text: 'some text'
    },
    {
      title: 'Bootstrap',
      text: 'some text'
    },
    {
      title: 'C#',
      text: 'some text'
    },
    {
      title: 'CSS',
      text: 'some text'
    }
  ];
}
