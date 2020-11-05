import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is only a test',
      'https://static2.clutch.co/s3fs-public/logos/recipe_advertising_logo.png'
    ),
    new Recipe(
      'Test Recipe Two',
      'This is another test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
