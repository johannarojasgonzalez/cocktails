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
    public actifCocktail = 0; // on reçoit la valeur depuis le cocktail-container grace à l'input
    constructor( private cocktailService: CocktailService ) { }

    ngOnInit() {
        this.cocktailService.cocktails.subscribe(( cocktails: Cocktail[] ) => {
            this.cocktails = cocktails;
        } ); // on subscribe et on reçoit la valeur cocktails
    }
    // fonction pickCocktail
    pickCocktail( index: number ): void {
        this.actifCocktail = index;
        this.cocktailService.selectCocktail( index );
    }

}
