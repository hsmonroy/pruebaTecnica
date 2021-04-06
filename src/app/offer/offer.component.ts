import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { element } from 'protractor';
import { dataOffers } from '../interface/data.interface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  public characteristicsReceived: any[] = [];
  public pricesReceived: any[] = [];
  
  listOffer : dataOffers[] = [];
  idListOffer : any[] = [];
  characteristics: any[] = [];
  prices: any[] = [];
  priceName : any[] = [];
  idOffer = '';
  offerName = '';


  constructor(
    private offers: DataService
  ) { }

  ngOnInit(): void {
    this.listOffer = this.offers.getData();
    try {
      if(this.listOffer.length > 0){
        for(let i = 0; i<this.listOffer.length; i++){
          for (let j = 0; j < this.listOffer[i].versions.length; j++){
            this.idListOffer.push(this.listOffer[i].versions[j]);
          }
        }
      }  
    } catch(e) {
      console.error(e.stack);
    }
  }

  changeFlag(idOffer: string){
    this.characteristics = [];
    this.prices = [];
    this.priceName = [];
    try {
      if(this.listOffer.length > 0){
        for(let i = 0; i<this.listOffer.length; i++){
          for (let j = 0; j < this.listOffer[i].versions.length; j++){
            if (this.listOffer[i].versions[j].id == idOffer){
              this.idOffer = this.listOffer[i].versions[j].id;
              this.offerName=this.listOffer[i].versions[j].name;
              this.prices.push(this.listOffer[i].versions[0].productOfferingPrices);
    
              if(this.listOffer[i].versions[0].characteristics.length > 0){
                for (let k = 0; k < this.listOffer[i].versions[0].characteristics.length; k++) {
                  this.characteristics.push(this.listOffer[i].versions[0].characteristics[k].versions[0].name);
                  this.characteristicsReceived = this.characteristics;
                 }
              } else {
                console.log('Array Vacio!');
              }
            };
          }
        }
      } else {
        console.log('Array Vacio!');
      }     
    } catch(e) {
      console.log('Error: ', e.stack);
    }

    try {
      if (this.prices[0].length > 0){
        for(let i = 0; i < this.prices[0].length; i++){
          this.priceName.push({
            name: this.prices[0][i].versions[0].name,
            price: this.prices[0][i].versions[0].price.amount
          });
          this.pricesReceived = this.priceName;
        } 
      } else {
        console.log('Array Vacio!');
      } 
    } catch(e) {
      console.log('Error: ', e.stack);
    }
  }
}
