import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model.js';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'A Test Recipe', 
    'This is a simple test', 
    'https://sugarspunrun.com/wp-content/uploads/2018/01/Vanilla-Cake-Recipe-1-of-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
