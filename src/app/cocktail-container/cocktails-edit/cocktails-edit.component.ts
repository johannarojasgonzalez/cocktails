import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Cocktail } from '../../shared/models/cocktail.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktails-edit',
  templateUrl: './cocktails-edit.component.html',
  styleUrls: ['./cocktails-edit.component.css']
})
export class CocktailsEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail: Cocktail;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {

    // on va identifier si on est sur la création ou édition d'un cocktail
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.cocktail = this.cocktailService.getCocktail(params.index);
        this.initForm(this.cocktail);
        console.log(this.cocktail);
      } else {
        this.initForm(new Cocktail('', '', '', []));
        console.log('no cocktail');
      }
    });
  }

  initForm(cocktail: Cocktail) {
    this.cocktailForm = this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: [cocktail.desc],
      ingredients: this.formBuilder.array( cocktail.ingredients.map( ingredient => this.formBuilder.group({
        name: [ingredient.name],
        quantity: [ingredient.quantity]
      })))
    });
  }

  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.formBuilder.group({
      name: [''],
      quantity: ['']
    }));
  }

  createCocktail() {
    this.cocktailService.addCocktail(this.cocktailForm.value);
  }
}
