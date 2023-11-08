import { Component } from '@angular/core';
import { CardService } from '../core/card/card.service';
import { Card } from '../core/card/card.model';

@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.component.html',
  styleUrls: ['./developpement.component.sass']
})
export class DeveloppementComponent {
  mainCards: Card[]

  constructor(private service: CardService) {
    this.mainCards = service.getDevCards();
  }

}
