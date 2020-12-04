import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is only a test',
      'https://static2.clutch.co/s3fs-public/logos/recipe_advertising_logo.png',
      [
        new Ingredient('Ground Beef', 1, 'Produce', 5, 'Yes'),
        new Ingredient('Shells', 2, 'Produce', 2, 'Yes'),
      ]
    ),
    new Recipe(
      'Test Recipe Two',
      'This is another test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Tomatoe', 1, 'Produce', 5, 'Yes'),
        new Ingredient('Banana', 2, 'Produce', 2, 'Yes'),
      ]
    ),
    new Recipe(
      'Test Recipe Three',
      'This is third test',
      'https://pxhere.com/en/photo/1630317',
      [
        new Ingredient('Fish', 1, 'Produce', 5, 'Yes'),
        new Ingredient('Onions', 2, 'Produce', 2, 'Yes'),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  /**
   * Get a list of all recipes
   * @returns A list of recipes
   */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  /**
   * Gets a recipe based on the index provided
   *
   * @param index - The index of the recipe to fetch
   * @returns A recipe
   */
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  /**
   * Adds the ingredients included in a recipe to the shopping list
   *
   * @param ingredients - The ingredients to add to the shopping list
   */
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
