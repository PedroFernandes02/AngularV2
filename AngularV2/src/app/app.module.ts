import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventAndRefComponent } from './components/event-and-ref/event-and-ref.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { ChuckComponent } from './components/chuck/chuck.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    NavbarComponent,
    EventAndRefComponent,
    ClinicaVeterinariaComponent,
    CookiesComponent,
    FourOFourComponent,
    ListaDeComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    SColorComponent,
    ChuckComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
