from csv import reader
from ast import literal_eval

def find_recipes(ingredients):
    recipes = []
    with open('../frontend/archive/Food Ingredients and Recipe Dataset with Image Name Mapping.csv') as f:
        lines = list(reader(f))
        for line in lines:
            can_make = True
            for required in literal_eval(line[5]):
                if not any(ingredient in required.lower() for ingredient in ingredients):
                    can_make = False
                    break
            if can_make:
                recipes.append(line)
    return recipes