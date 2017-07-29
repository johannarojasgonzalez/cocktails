import { Component, OnInit, Input, Output } from '@angular/core';
import {Cocktail} from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  @Input() cocktail: Cocktail; // on reçoit la valeur depuis le cocktail-container grace à l'input
  constructor() { }

  ngOnInit() {
  }

}
