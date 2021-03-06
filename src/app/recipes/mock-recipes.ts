import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export const mockRecipes: Recipe[] = [
  new Recipe(
    'Test Recipe',
    'This is only a test',
    'https://static2.clutch.co/s3fs-public/logos/recipe_advertising_logo.png',
    [
      new Ingredient('Ground Beef', 1, 'Produce', 5, 'Yes'),
      new Ingredient('Shells', 2, 'Produce', 2, 'Yes'),
    ]
  ),
  new Recipe(
    'Test Recipe Two',
    'This is another test',
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
    [
      new Ingredient('Tomatoe', 1, 'Produce', 5, 'Yes'),
      new Ingredient('Banana', 2, 'Produce', 2, 'Yes'),
    ]
  ),
  new Recipe(
    'Test Recipe Three',
    'This is third test',
    'https://pxhere.com/en/photo/1630317',
    [
      new Ingredient('Fish', 1, 'Produce', 5, 'Yes'),
      new Ingredient('Onions', 2, 'Produce', 2, 'Yes'),
    ]
  ),
];
