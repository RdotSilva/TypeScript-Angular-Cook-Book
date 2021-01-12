import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe();
  }

  /**
   * Save data to Firebase database
   */
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  /**
   * Fetch data from Firebase database
   */
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
