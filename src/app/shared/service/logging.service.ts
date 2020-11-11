export class LoggingService {
  logRecipe(recipe: string) {
    console.log('New recipe added: ' + recipe);
  }

  logIngredient(ingredient: string) {
    console.log('New ingredient added: ' + ingredient);
  }
}
