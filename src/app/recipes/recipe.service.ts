import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a simple test',
            'https://www.epicurious.com/recipes/food/views/the-ultimate-hamburger-232191',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 30)
            ]
        ),
        new Recipe(
            'Hamburger',
            'A delicious hamburger',
            'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_274%2Ch_169/the-ultimate-hamburger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 30)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}