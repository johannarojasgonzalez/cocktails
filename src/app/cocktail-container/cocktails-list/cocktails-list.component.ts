import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Cocktail} from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[]; // on re�oit la valeur depuis le cocktail-container grace � l'input
  @Output() public pick: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  // fonction pickCocktail
  pickCocktail(index: number): void  {
    // on va emettre un evt pour informer au container quel cocktail on a cliqu�
    this.pick.emit(index); // emit grace � l'output
  }

}
