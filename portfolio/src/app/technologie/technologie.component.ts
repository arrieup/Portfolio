import { Component } from '@angular/core';
import { Card } from '../core/card/card.model';
import { TechnologieService } from './technologie.service';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.sass']
})
export class TechnologieComponent {
  mainCards: Card[]

  constructor(private service: TechnologieService) {
    this.mainCards = service.getTechnoCards();
  }

}
