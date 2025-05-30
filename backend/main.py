from fastapi import FastAPI
import find
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/recipes")
def get_recipes(ingredients: str):
    ingredient_list = [item.strip().lower() for item in ingredients.split(',')]
    return find.find_recipes(ingredient_list)