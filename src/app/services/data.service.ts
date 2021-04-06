import { Injectable } from '@angular/core';
import ofertas from '../../assets/json/ofertas.json';
import { dataOffers } from '../interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jsonData: dataOffers[] = ofertas;
  constructor() { 

  }

  getData(){
    return this.jsonData;
  }
}
