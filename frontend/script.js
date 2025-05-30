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

function find() {
    ingredients = document.getElementById("ingredients");
    response = fetch("http://127.0.0.1:8000/recipes?ingredients="+ingredients.value.replaceAll("\n", ","))
    .then(response=>response.json())
    .then(data=>{
        const element = document.getElementById("recipes");
        element.innerHTML = '';
        for(const recipe of data) {
            const image = document.createElement("img");
            image.src = "./archive/food-images/" + recipe[4] + ".jpg";
            console.log("Image Source: " + image.src);
            
            const h2 = document.createElement("h2");
            h2.textContent = recipe[1];

            const ingreds = document.createElement("p");
            const node = document.createTextNode(recipe[2].replaceAll(/\[|\]|'/g, ""));
            ingreds.appendChild(node);

            const instructions = document.createElement("p");
            const node2 = document.createTextNode(recipe[3]);
            instructions.appendChild(node2);

            element.appendChild(image);
            element.appendChild(h2);
            element.appendChild(ingreds);
            element.appendChild(instructions);
        }
    })
}