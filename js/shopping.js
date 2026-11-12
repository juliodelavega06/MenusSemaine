function generateShoppingList() {

    const recipes = getRecipes();

    let content = "";

    recipes.forEach(recipe => {

        content += `
            <div class="shopping-item">
                ☐ ${recipe.name}
            </div>
        `;

    });

    const container =
        document.getElementById("shoppingContainer");

    container.innerHTML = content;

}

