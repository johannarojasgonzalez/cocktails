import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CocktailService {

    public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

    // on garde ici le dernier cocktail séléctionné

    constructor(private httpService: Http) {
        // seulement la première fois afin d'inserer des données dans la base
        // normalement cette requete se fait avec un post, mais le post avec firebase rajoute un clé qu'on veut pas
        // c'est pour cela qu'on a utilisé put
        // this.httpService.put('https://cocktails-a429c.firebaseio.com/cocktails.json', this.cocktails.value)
        // .subscribe( res => console.log(res));
        this.initCocktails();
    }

    initCocktails() {
        this.httpService.get('https://cocktails-a429c.firebaseio.com/cocktails.json')
            .map(res => res.json())
            .subscribe((cocktails: Cocktail[]) => {
                this.cocktails.next(cocktails);
            });
    }

    getCocktail(index: number): Observable<Cocktail> {
        return this.cocktails.filter(cocktails => cocktails != null)
            .map(cocktails => cocktails[index]);
    }

    addCocktail(cocktail: Cocktail): void {
        const cocktails = this.cocktails.value.slice(); // dernière valeur de cocktails, copie par valeur et non par reference
        cocktails.push(new Cocktail(cocktail.name,
            cocktail.img,
            cocktail.desc,
            cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))));
        this.cocktails.next(cocktails);
    }

    editCocktail(editCocktail: Cocktail): void {
        const cocktails = this.cocktails.value.slice(); // dernière valeur de cocktails, copie par valeur et non par reference
        // on va chercher notre cocktail à editer
        // const index = cocktails.map(c => c.name).indexOf(editCocktail.name);
        const index = cocktails.findIndex(c => c.name === editCocktail.name);
        cocktails[index] = editCocktail;
        this.cocktails.next(cocktails);
        this.save();
    }

    save(): void {
        console.log(this.cocktails.value);
        this.httpService.put('https://cocktails-a429c.firebaseio.com/cocktails.json', this.cocktails.value)
        .subscribe( res => console.log(res));
    }

}
