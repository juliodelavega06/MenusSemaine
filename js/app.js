document.addEventListener("DOMContentLoaded", () => {

    initializeRecipes();

    renderRecipes();

    initializeTabs();

    initializeModal();

    initializeGenerateWeek();

});

function initializeTabs() {

    const tabs =
        document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".tab-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            document
                .querySelectorAll(".tab-content")
                .forEach(content => {
                    content.classList.remove("active");
                });

            tab.classList.add("active");

            const target =
                document.getElementById(
                    tab.dataset.tab
                );

            if (target) {
                target.classList.add("active");
            }

        });

    });

}

function initializeModal() {

    const modal =
        document.getElementById("recipeModal");

    modal.style.display = "none";

    document
        .getElementById("addRecipeBtn")
        .addEventListener("click", () => {

            document
                .getElementById("recipeForm")
                .reset();

            document
                .getElementById("recipeId")
                .value = "";

            document
                .getElementById("modalTitle")
                .textContent = "Nouvelle recette";

            modal.style.display = "block";
        });

    document
        .getElementById("closeModalBtn")
        .addEventListener("click", () => {

            closeRecipeModal();

        });

    document
        .getElementById("recipeForm")
        .addEventListener("submit", e => {

            e.preventDefault();

            const existingId =
                document
                    .getElementById("recipeId")
                    .value;

            const recipe = {

                id: existingId
                    ? parseInt(existingId)
                    : Date.now(),

                name:
                    document
                        .getElementById("recipeName")
                        .value,

                prepTime:
                    document
                        .getElementById("recipePrepTime")
                        .value,

                cookTime:
                    document
                        .getElementById("recipeCookTime")
                        .value,

                category:
                    document
                        .getElementById("recipeCategory")
                        .value,

                ingredients:
                    document
                        .getElementById("recipeIngredients")
               
