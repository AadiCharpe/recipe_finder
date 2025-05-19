from fastapi import FastAPI
import find

app = FastAPI()

@app.get("/recipes/")
def get_recipes(ingredients: str):
    ingredient_list = [item.strip() for item in ingredients.split(',')]
    return find.find_recipes(ingredient_list)