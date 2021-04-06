import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  @Input() characteristicSon: any[] = [];
  constructor(
    private offers: DataService
  ) { }

  ngOnInit(): void {
  }



}
