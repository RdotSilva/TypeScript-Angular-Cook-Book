import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

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
    this.dataStorageService.fetchRecipes();
  }
}
