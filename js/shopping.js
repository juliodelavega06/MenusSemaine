
function generateShoppingList() {

    alert("Bouton détecté !");

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
