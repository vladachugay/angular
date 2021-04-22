import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards = [
    {
      area: 'FRONT END',
      name: 'LESS',
      description: 'LESS (Leaner Style Sheets, компактная таблица стилей)— это динамический язык стилей, который разработал Alexis Sellier. ' +
        'Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS», ' +
        'в котором также использован синтаксис, являющийся расширением СSS.',
      pic: 'assets/img/a4.jpg'
    },
    {
      area: 'BACK END',
      name: 'C++',
      description: 'C++ (читается си-плюс-плюс) — компилируемый, статически типизированный язык программирования общего назначения. ' +
        'Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, ' +
        'обобщённое программирование.',
      pic: 'assets/img/a3.jpg'
    },
    {
      area: 'BACK END',
      name: 'C#',
      description: 'C# (произносится си шарп) — объектно-ориентированный язык программирования. Разработан в 1998—2001 годах группой ' +
        'инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы ' +
        'Microsoft .NET Framework.',
      pic: 'assets/img/a2.jpg'
    },
    {
      area: 'FRONT END',
      name: 'CSS',
      description: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. ' +
        'Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки ' +
        'HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL',
      pic: 'assets/img/a1.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}


