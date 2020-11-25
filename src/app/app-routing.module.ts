import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavoritesResolver } from './favorites/favorites-resolver.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
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
    canActivate: [AuthGuardService],
    component: UserComponent,
    resolve: { favorites: FavoritesResolver },
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
