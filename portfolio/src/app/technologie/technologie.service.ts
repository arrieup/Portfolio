import { Injectable } from '@angular/core';
import { Card } from '../core/card/card.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  private cardList: Card[]
  constructor() {

    this.cardList = [
      new Card("Angular", "Framework WEB", "Connaissance du framework web", new URL("/assets/logos/Angular.png", environment.domain)),
      new Card("PHP", "Langage", "Agenda web via Symfony", new URL("/assets/logos/PHP.png", environment.domain)),
      new Card("C#", "Langage", "Connaissance du langage", new URL("/assets/logos/C_sharp.png", environment.domain)),
      new Card("Java", "Langage", "Connaissance du langage", new URL("/assets/logos/Java.png", environment.domain)),
      new Card("Javascript", "Langage", "Connaissance du langage", new URL("/assets/logos/JS.png", environment.domain))
    ];
  }


  public getTechnoCards(): Card[] {
    return this.cardList
  }
}
