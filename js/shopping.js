function generateShoppingList() {

    const recipes = getRecipes();

    const ingredientsSet = new Set();

    recipes.forEach(recipe => {

        if (!recipe.ingredients) {
            return;
        }

        recipe.ingredients
            .split("\n")
            .forEach(ingredient => {

                const item = ingredient.trim();

                if (item !== "") {
                    ingredientsSet.add(item);
                }

            });

    });

    const ingredients = Array.from(ingredientsSet);

    const container =
        document.getElementById("shoppingContainer");

    if (ingredients.length === 0) {

        container.innerHTML = `
            <div class="card">
                Aucune donnée disponible.
            </div>
        `;

        return;
    }

    let html = `
        <div class="card">
            <h2>Liste de courses</h2>
    `;

    ingredients.sort().forEach(item => {

        html += `
            <div class="shopping-item">
                <label>
                    <input type="checkbox">
                    ${item}
                </label>
            </div>
        `;

    });

    html += `</div>`;

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {

    const btn =
        document.getElementById(
            "generateShoppingBtn"
        );

    if (btn) {

        btn.addEventListener(
            "click",
            generateShoppingList
        );

    }

});
