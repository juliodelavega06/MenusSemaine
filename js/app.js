document.addEventListener("DOMContentLoaded", () => {

    console.log("MenusSemaine démarré");

    // Gestion des onglets

    const tabs = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".tab-btn")
                .forEach(btn => btn.classList.remove("active"));

            document
                .querySelectorAll(".tab-content")
                .forEach(content => content.classList.remove("active"));

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

    // Fenêtre recette

    const modal = document.getElementById("recipeModal");

    if (modal) {
        modal.style.display = "none";
    }

    const addRecipeBtn =
        document.getElementById("addRecipeBtn");

    const closeModalBtn =
        document.getElementById("closeModalBtn");

    if (addRecipeBtn) {

        addRecipeBtn.addEventListener("click", () => {

            modal.style.display = "block";

        });

    }

    if (closeModalBtn) {

        closeModalBtn.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

});
