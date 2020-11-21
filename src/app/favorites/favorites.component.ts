import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Favorite } from './favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onAddFavorite(favorite: Favorite) {
    this.favorites.push(favorite);
  }

  // Programmatically trigger router navigation
  onShowRecipes() {
    this.router.navigate(['/recipes']);
  }

  onReload() {
    this.router.navigate(['favorites'], { relativeTo: this.route });
  }

  onLogin() {
    this.authService.login();
  }
}
