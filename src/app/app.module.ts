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
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FavoritesResolver } from './favorites/favorites-resolver.service';
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
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ShoppingListService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuard,
    FavoritesResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
