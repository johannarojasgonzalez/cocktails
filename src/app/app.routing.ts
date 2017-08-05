import { RouterModule, Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailsEditComponent } from './cocktail-container/cocktails-edit/cocktails-edit.component';
import { PanierComponent } from './panier/panier.component';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';

const APP_ROUTE: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    { path: 'panier', component: PanierComponent },
    {
        path: 'cocktails', component: CocktailContainerComponent,
        children: [
            {path: 'new', component: CocktailsEditComponent },
            {path: ':index/edit', component: CocktailsEditComponent },
            { path: ':index', component: CocktailsDetailsComponent },
            { path: '', component: CocktailsDetailsComponent }
        ]
    },
    { path: '**', redirectTo: 'cocktails' }
];

export const AppRouting = RouterModule.forRoot( APP_ROUTE );
