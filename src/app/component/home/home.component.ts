import { Component, OnInit } from '@angular/core';
import { Shared } from 'src/app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: Shared={
    name:"ITI store",
    logo:"https://picsum.photos/200/300.jpg",
    services:["Training", "Education", "Coaching", "Freelancing"]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
