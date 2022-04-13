import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Han';
  public age  = 20;
  public fruit = [{
    firstName: "123",
    lastName : "Doe",
    language : "EN"
  },
  {
    firstName: "John1",
    lastName : "Doe1",
    language : "EN1"
  },
];
  constructor() { }

  ngOnInit(): void {

  }

   
   
}
