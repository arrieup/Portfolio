import { Component } from '@angular/core';
import { Card } from '../card/card.model';
import { CardService } from '../card/card.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  mainCards: Card[]

  constructor(private service: CardService) {
    this.mainCards = service.getCards();
  }

}
