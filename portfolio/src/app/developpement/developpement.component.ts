import { Component } from '@angular/core';
import { Card } from '../core/card/card.model';
import { DeveloppementService } from './developpement.service';

@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.component.html',
  styleUrls: ['./developpement.component.sass']
})
export class DeveloppementComponent {
  mainCards: Card[]

  constructor(private service: DeveloppementService) {
    this.mainCards = service.getDevCards();
  }

}
