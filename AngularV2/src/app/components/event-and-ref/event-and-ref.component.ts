import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-and-ref',
  templateUrl: './event-and-ref.component.html',
  styleUrls: ['./event-and-ref.component.css']
})
export class EventAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: string = "default";
  translate: number = 0;
  shrink: number = 0;

  increaseThis(refInput: HTMLElement) {
    this.shrink += 10;
    refInput.style.height = this.shrink + "px";
  }

  decreaseThis(refInput: HTMLElement) {
    this.shrink -= 10;
    refInput.style.height = this.shrink + "px";
  }

  translateThis(refInput: HTMLElement) {
    if (refInput.classList.contains("translator")) {
      refInput.classList.remove("translator");
    } else {
      refInput.classList.add("translator");
    }
  }

  rotateThis(refInput: HTMLElement) {
    if (refInput.classList.contains("rotator")) {
      refInput.classList.remove("rotator");
    } else {
      refInput.classList.add("rotator");
    }
  }

  changeColor(colorX): string {
    return this.color = colorX;
  }
}
