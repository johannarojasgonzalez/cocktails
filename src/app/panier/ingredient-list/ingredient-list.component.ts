import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';

@Component( {
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.css']
} )
export class IngredientListComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public ingredients: Ingredient[] = [new Ingredient( 'lemon', 2 )];
    constructor( private panierService: PanierService ) { }

    ngOnInit() {
        this.subscription = this.panierService.panier.subscribe(( ingredients: Ingredient[] ) => {
            this.ingredients = ingredients;
        } );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
