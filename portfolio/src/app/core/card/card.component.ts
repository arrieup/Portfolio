import { Component, Input } from '@angular/core';
import { Card } from './card.model';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() currentCard!: Card;

  constructor() {

  }

}
