const DEFAULT_RECIPES = [
    {
        id: 1,
        name: "Lasagnes",
        prepTime: 20,
        cookTime: 45,
        category: "viande",
        ingredients: "Boeuf haché\nLasagnes\nTomates",
        instructions: "Préparer la sauce puis cuire au four."
    },
    {
        id: 2,
        name: "Poulet Curry",
        prepTime: 15,
        cookTime: 30,
        category: "viande",
        ingredients: "Poulet\nOignon\nLait de coco",
        instructions: "Faire revenir puis cuire."
    },
    {
        id: 3,
        name: "Quiche Lorraine",
        prepTime: 15,
        cookTime: 35,
        category: "viande",
        ingredients: "Lardons\nCrème\nOeufs",
        instructions: "Mélanger puis cuire."
    },
    {
        id: 4,
        name: "Poisson Riz",
        prepTime: 10,
        cookTime: 20,
        category: "poisson",
        ingredients: "Cabillaud\nRiz",
        instructions: "Cuire le poisson et le riz."
    }
];

function initializeRecipes() {

    const existing = getRecipes();

    if (existing.length === 0) {
        saveRecipes(DEFAULT_RECIPES);
    }
}

function renderRecipes() {

    const container =
        document.getElementById("recipesContainer");

    if (!container) return;

    const recipes = getRecipes();

    container.innerHTML = "";

    recipes.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
            <h3>${recipe.name}</h3>

            <div class="recipe-meta">
                Préparation : ${recipe.prepTime} min
            </div>

            <div class="recipe-meta">
                Cuisson : ${recipe.cookTime} min
            </div>

            <div class="recipe-actions">
                <button class="delete-btn"
                    onclick="deleteRecipe(${recipe.id})">
                    🗑 Supprimer
                </button>
            </div>
        `;

        container.appendChild(card);

    });

}

function deleteRecipe(id) {

    let recipes = getRecipes();

    recipes =
        recipes.filter(r => r.id !== id);

    saveRecipes(recipes);

    renderRecipes();

}

function addRecipe(recipe) {

    const recipes = getRecipes();

    recipes.push(recipe);

    saveRecipes(recipes);

    renderRecipes();

}
