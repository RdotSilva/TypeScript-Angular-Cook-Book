import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  /**
   * Subscribe to auth service
   */
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
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

  /**
   * Log a user out
   */
  onLogout() {
    this.authService.logout();
  }

  /**
   * Unsubscribe from auth service
   */
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
