import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardList: Card[]
  deployDomain = "https://pabloarrieumerlou.com/"
  testDomain = "http://localhost:4200/"


  constructor() {
    this.cardList = [
      new Card("Angular", "Technologie", "Connaissance du framework web", new URL("/assets/logos/Angular.png", this.deployDomain)),
      new Card("PHP", "Technologie", "Développement en PHP", new URL("/assets/logos/PHP.png", this.deployDomain)),
      new Card("Java", "Technologie", "Différents environnements maîtrisés", new URL("/assets/logos/Java.png", this.deployDomain)),
      new Card("Javascript", "Technologie", "Différents environnements maîtrisés", new URL("/assets/logos/JS.png", this.deployDomain))
    ]
  }

  public getCards(): Card[] {
    return this.cardList
  }

}
