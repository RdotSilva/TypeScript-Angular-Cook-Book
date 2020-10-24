import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('categoryInput') categoryInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  @ViewChild('requiredInput') requiredInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientCategory = this.categoryInputRef.nativeElement.value;
    const ingredientPrice = this.priceInputRef.nativeElement.value;

    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount,
      ingredientCategory,
      ingredientPrice
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
