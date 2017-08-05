import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component( {
    selector: 'app-cocktails-list',
    templateUrl: './cocktails-list.component.html',
    styleUrls: ['./cocktails-list.component.css']
} )
export class CocktailsListComponent implements OnInit {
    public cocktails: Cocktail[];
    constructor( private cocktailService: CocktailService ) { }

    ngOnInit() {
        this.cocktailService.cocktails.subscribe(( cocktails: Cocktail[] ) => {
            this.cocktails = cocktails;
        } ); // on subscribe et on reçoit la valeur cocktails
    }

}
