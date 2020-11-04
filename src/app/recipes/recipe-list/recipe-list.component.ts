import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/shared/service/recipes.service';
import { Recipe } from '../recipe.model';
import { LoggingService } from './../../shared/service/logging.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [LoggingService],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(
    private loggingService: LoggingService,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  onRecipEdit(recipeIndex: number, recipe: Recipe) {
    this.recipe[recipeIndex] = recipe;
  }
}
