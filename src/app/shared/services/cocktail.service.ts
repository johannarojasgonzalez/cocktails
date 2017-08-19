import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {

    public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
        new Cocktail('Mojito',
            'http://recetamojito.info/img/mojito-cubano-841.jpg',
            'Mojito',
            [
                new Ingredient('Citron', 1),
                new Ingredient('Perrier', 1),
                new Ingredient('Menthe', 1),
            ]),
        new Cocktail('Margarita',
            'https://unareceta.com/wp-content/uploads/2016/08/receta-margarita-sierra-supreme.jpg',
            'Margarita',
            [
                new Ingredient('Tequila', 1),
                new Ingredient('Citron', 1),
                new Ingredient('Sucre', 1),
            ]),
        new Cocktail('Sour',
            'http://thecocktaildrink.com/wp-content/uploads/thecocktaildrink/melon-sour-cocktail.jpg',
            'Sour'
            ,
            [
                new Ingredient('Whisky', 1),
                new Ingredient('Citron', 1),
                new Ingredient('Sucre', 1),
            ]),
        new Cocktail('Martini',
            'http://img.loquenosabias.com/cocteles/2012/09/05/coctel-martini-receta-y-preparacion.jpg',
            'Martini',
            [
                new Ingredient('Ginebra', 1),
                new Ingredient('Citron', 1),
                new Ingredient('Sucre', 1),
            ])
    ]);

    // on garde ici le dernier cocktail séléctionné

    constructor() { }

    getCocktail(index: number): Cocktail {
        return this.cocktails.value[index];
    }

    addCocktail(cocktail: Cocktail): void {
        const cocktails = this.cocktails.value.slice(); // dernière valeur de cocktails, copie pas par reference
        cocktails.push(new Cocktail(cocktail.name,
            cocktail.img,
            cocktail.desc,
            cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
            this.cocktails.next(cocktails);
    }
}
