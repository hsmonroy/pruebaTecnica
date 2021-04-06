import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CharacteristicsComponent } from 'src/app/characteristics/characteristics.component';
import { PricesComponent } from 'src/app/prices/prices.component';
import { OfferComponent } from 'src/app/offer/offer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
