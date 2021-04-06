import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input() pricesSon: any[] = [];

  constructor(
    private offers: DataService
  ) { }

  ngOnInit(): void {
  }

}
