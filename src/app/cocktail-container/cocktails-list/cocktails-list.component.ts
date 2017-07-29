import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Cocktail} from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[]; // on reçoit la valeur depuis le cocktail-container grace à l'input
  @Output() public pick: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  // fonction pickCocktail
  pickCocktail(index: number): void  {
    // on va emettre un evt pour informer au container quel cocktail on a cliqué
    this.pick.emit(index); // emit grace à l'output
  }

}
