import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { EventAndRefComponent } from './components/event-and-ref/event-and-ref.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { CookiesComponent } from './components/cookies/cookies.component';



const routes: Routes = [
  {path:"", redirectTo: "/Home", pathMatch: 'full'},
  {path:"Home", component: HomeComponent},
  {path:"Calculadora", component: CalculatorComponent},
  {path:"EvAndRef", component: EventAndRefComponent},
  {path:"ClinicaVet", component: ClinicaVeterinariaComponent},
  {path:"notFound", component: FourOFourComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"cookie", component: CookiesComponent},
  {path:"listaDeCompras", component: ListaDeComprasComponent,
  children:
    [
      {path:"add", component: AddComponent},
      {path:"buy", component: BuyComponent},
    ]
  },
  {path:"p-color", component: PColorComponent,
  children:
    [
      {path:":color", component: SColorComponent}
    ]
  },
    {path:"**", redirectTo: "notFound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
