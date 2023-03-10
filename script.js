// select the recipe buttons
const recipeButtons = document.querySelectorAll('.recipe-button');

// add event listener to each recipe button
recipeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // get the recipe from the parent element
    const recipe = button.parentNode;
    // get the recipe title
    const recipeTitle = recipe.querySelector('h3').textContent;
    // get the recipe ingredients
    const recipeIngredients = recipe.querySelectorAll('li');
    const ingredientsList = [];
    recipeIngredients.forEach(ingredient => {
      ingredientsList.push(ingredient.textContent);
    });
    // create a new window with the recipe
    const recipeWindow = window.open('', 'Recipe', 'width=400,height=400');
    recipeWindow.document.write(`
      <html>
        <head>
          <title>${recipeTitle}</title>
        </head>
        <body>
          <h1>${recipeTitle}</h1>
          <h2>Ingredients:</h2>
          <ul>
            ${ingredientsList.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
  });
});
