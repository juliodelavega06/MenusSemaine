const STORAGE_KEYS = {
    RECIPES: "menus_recipes",
    MENUS: "menus_week",
    SETTINGS: "menus_settings",
    SHOPPING: "menus_shopping"
};

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key, defaultValue) {
    const value = localStorage.getItem(key);

    if (!value) {
        return defaultValue;
    }

    try {
        return JSON.parse(value);
    } catch {
        return defaultValue;
    }
}

function getRecipes() {
    return loadData(STORAGE_KEYS.RECIPES, []);
}

function saveRecipes(recipes) {
    saveData(STORAGE_KEYS.RECIPES, recipes);
}

function getMenus() {
    return loadData(STORAGE_KEYS.MENUS, {});
}

function saveMenus(menus) {
    saveData(STORAGE_KEYS.MENUS, menus);
}

function getSettings() {
    return loadData(STORAGE_KEYS.SETTINGS, {
        peopleCount: 4,
        maxPrepTime: 20
    });
}

function saveSettings(settings) {
    saveData(STORAGE_KEYS.SETTINGS, settings);
}
