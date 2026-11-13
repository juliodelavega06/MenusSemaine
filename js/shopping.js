function generateShoppingList() {

    const recipes = getRecipes();

    console.log(recipes);

    const container =
        document.getElementById("shoppingContainer");

    container.innerHTML =
        "<pre>" +
        JSON.stringify(recipes, null, 2) +
        "</pre>";
}

document.addEventListener("DOMContentLoaded", () => {

    const btn =
        document.getElementById("generateShoppingBtn");

    if (btn) {
        btn.addEventListener(
            "click",
            generateShoppingList
        );
    }

});
