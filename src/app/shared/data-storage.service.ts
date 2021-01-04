import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { config } from '../../../config';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  /**
   * Make HTTP put request to Firebase server w/ recipe data
   */
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${config.url}/recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
