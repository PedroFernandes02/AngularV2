import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-and-ref',
  templateUrl: './event-and-ref.component.html',
  styleUrls: ['./event-and-ref.component.css']
})
export class EventAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  corBackground = "";

  changeColor(): void{
    this.corBackground = this.corBackground == 'red' ? 'white' : 'red';
  }

}
