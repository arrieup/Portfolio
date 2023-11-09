import { Component } from '@angular/core';
import { Card } from '../card/card.model';
import { CardService } from '../card/card.service';
import { CardComponent } from '../card/card.component';
import { TechnologieService } from 'src/app/technologie/technologie.service';
import { DeveloppementService } from 'src/app/developpement/developpement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  mainCards: Card[]

  constructor(private technoService: TechnologieService, private developpementService: DeveloppementService) {
    this.mainCards = developpementService.getDevCards().concat(technoService.getTechnoCards())
  }

}
