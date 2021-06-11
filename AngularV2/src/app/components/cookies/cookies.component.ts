import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }
/*
  ngOnInit(): void {
  }

  cookies: boolean;
  aceiteiACookie: boolean;

  aceitarCookies(ctn:HTMLElement){
    localStorage.setItem("cookie", "1");
    ctn.style.display= "none";
  }

  lerCookies(){
    this.aceiteiACookie = localStorage.getItem("cookie") == "1" ? true : false;
  }
*/

ngOnInit(): void {
  this.getCookies();
}

cookies: boolean;
closed: boolean = false;

// save cookies
saveOnCookies(): any {
  



}

// get cookies
getCookies(): any {
  this.cookies = localStorage.getItem('cookies') == 'accepted' ? true : false;
}

close() {
  this.closed = true;
}



}
