import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { config } from '../../../config';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

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

  /**
   * Make HTTP get request to Firebase server to fetch recipe data
   */
  fetchRecipes() {
    return this.http.get<Recipe[]>(`${config.url}`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
