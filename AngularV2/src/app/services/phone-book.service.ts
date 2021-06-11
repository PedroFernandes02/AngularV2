import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  agendaService : PhoneBookService;
  constructor(private service : PhoneBookService) {
    this.agendaService = service;
   }


  ngOnInit(): void {
  }
}


