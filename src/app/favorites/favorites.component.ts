import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from './favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddFavorite(favorite: Favorite) {
    this.favorites.push(favorite);
  }
}
