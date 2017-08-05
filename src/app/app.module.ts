import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientListComponent } from './panier/ingredient-list/ingredient-list.component';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailsEditComponent } from './cocktail-container/cocktails-edit/cocktails-edit.component';

@NgModule( {
    declarations: [
        AppComponent,
        CocktailsListComponent,
        CocktailsDetailsComponent,
        HeaderComponent,
        CocktailContainerComponent,
        ActiveDirective,
        PanierComponent,
        IngredientListComponent,
        CocktailsEditComponent
    ],
    imports: [
        BrowserModule,
        AppRouting
    ],
    providers: [PanierService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
