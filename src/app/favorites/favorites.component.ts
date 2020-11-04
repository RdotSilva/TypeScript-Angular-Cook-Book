import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[];

  constructor() {}

  ngOnInit(): void {}
}
