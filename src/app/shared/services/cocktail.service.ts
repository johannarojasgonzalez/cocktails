import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {

    public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject( [
        new Cocktail( 'Mojito', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Mojito' ),
        new Cocktail( 'Margarita', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Margarita' ),
        new Cocktail( 'Sour', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Sour' ),
        new Cocktail( 'Martini', 'http://recetamojito.info/img/mojito-cubano-841.jpg', 'Martini' )
    ] );

    // on garde ici le dernier cocktail séléctionné

    public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject( this.cocktails.value[0] );
    constructor() { }

    selectCocktail( index: number ): void {
        this.cocktail.next( this.cocktails.value[index] );
    }
}
