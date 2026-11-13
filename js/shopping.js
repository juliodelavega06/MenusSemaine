function generateShoppingList() {

    const recipes = getRecipes();

    console.log("RECETTES :", recipes);

    alert(
        "Nombre de recettes : " +
        recipes.length
    );

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
