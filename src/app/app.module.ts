import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DropdownOutsideDirective } from './shared/dropdown-outside-click.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FavoriteUserComponent } from './favorite-user/favorite-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
  },
  {
    path: '',
    component: RecipesComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
  },
  {
    path: 'user/:id/:name',
    component: UserComponent,
  },
  {
    path: 'user/:id/edit',
    component: EditUserComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
  //TODO: Add nested child paths
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    DropdownOutsideDirective,
    FavoritesComponent,
    UserComponent,
    EditUserComponent,
    FavoriteUserComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
