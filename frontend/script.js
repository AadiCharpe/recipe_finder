function add() {
    ingredients = document.getElementById("ingredients");
    ingredient = document.getElementById("ingredient");
    if(ingredient.value !== ""){
        if(ingredients.value === "")
            ingredients.value += ingredient.value
        else
            ingredients.value += "\n" + ingredient.value;
        ingredient.value = "";
    }
}

function remove() {
    ingredients = document.getElementById("ingredients");
    const lines = ingredients.value.split('\n');
    lines.pop();
    ingredients.value = lines.join('\n');
}