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

            modal.style.display = "block";

        });

    document
        .getElementById("closeModalBtn")
        .addEventListener("click", () => {

            modal.style.display = "none";

        });

    document
        .getElementById("recipeForm")
        .addEventListener("submit", e => {

            e.preventDefault();

            const recipe = {
                id: Date.now(),
                name: document.getElementById("recipeName").value,
                prepTime: document.getElementById("recipePrepTime").value,
                cookTime: document.getElementById("recipeCookTime").value,
                category: document.getElementById("recipeCategory").value,
                ingredients: document.getElementById("recipeIngredients").value,
                instructions: document.getElementById("recipeInstructions").value
            };

            addRecipe(recipe);

            modal.style.display = "none";

            document
                .getElementById("recipeForm")
                .reset();

        });

}

function initializeGenerateWeek() {

    const btn =
        document.getElementById("generateMenuBtn");

    btn.addEventListener("click", () => {

        const recipes = getRecipes();

        const weekContainer =
            document.getElementById("weekContainer");

        const days = [
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche"
        ];

        weekContainer.innerHTML = "";

        days.forEach(day => {

            const lunch =
                recipes[
                    Math.floor(Math.random() * recipes.length)
                ];

            const dinner =
                recipes[
                    Math.floor(Math.random() * recipes.length)
                ];

            weekContainer.innerHTML += `
                <div class="day-card">

                    <div class="day-title">
                        ${day}
                    </div>

                    <div class="meal">
                        <div class="meal-title">
                            Midi
                        </div>

                        <div class="meal-name">
                            ${lunch.name}
                        </div>
                    </div>

                    <div class="meal">
                        <div class="meal-title">
                            Soir
                        </div>

                        <div class="meal-name">
                            ${dinner.name}
                        </div>
                    </div>

                </div>
            `;

        });

    });

}
