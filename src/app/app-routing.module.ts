import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserComponent } from './user/user.component';

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
@NgModule({})
export class AppRoutingModule {}
