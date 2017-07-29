import { Component, OnInit } from '@angular/core';
import {Cocktail} from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {

  // element qu'on passe à la liste de cocktails-liste-component
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Mojito'),
    new Cocktail('Margarita', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Margarita'),
    new Cocktail('Sour', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Sour'),
    new Cocktail('Martini', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Martini')
  ];
  // element qu'on passe à cocktails-details-component
  public cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }
  // fonction updateCocktail declauché après l'envoi d'un evt 
  updateCocktail(index: number) : void {
    this.cocktail = this.cocktails[index];
  }

}
