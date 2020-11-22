import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
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
    canActivate: [AuthGuardService],
    component: UserComponent,
  },
  {
    path: 'user/:id/edit',
    canActivateChild: [AuthGuardService],
    component: EditUserComponent,
    canDeactivate: [CanDeactivateGuard],
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
