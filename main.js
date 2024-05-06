
/*Questions to ask yourselves:
What should the parameter(s) for the cook function be to account for any number of ingredients?
How do we pass in the specific ingredients to the function?
How can we check for the specific ingredients?*/

/*Link*/

const recipes = [
    { ingredients: ["Fresh Milk", "Cane Sugar", "Bird Egg"], food: "Egg Pudding" },
    { ingredients: ["Tabantha Wheat", "Cane Sugar", "Goat Butter", "Bird Egg"], food: "Egg Tart" },
    { ingredients: ["Hylian Rice", "Raw Prime Meat", "Bird Egg"], food: "Chicken Egg Fried Rice" },
    { ingredients: ["Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh"], food: "Poultry Pilaf" }
]

function findFood(ingredients) {
    const matchingRecipes = recipes.filter(recipe =>
        recipe.ingredients.length === ingredients.length &&
        recipe.ingredients.every(ingredient => ingredients.includes(ingredient))
    )
    return matchingRecipes.length > 0 ? matchingRecipes[0].food : "No matching recipe found"
}

// Example usage:
const ingredients = ["Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh"]
const result = findFood(ingredients)
console.log("The food produced with these ingredients is:", result)



/*
ex:const predefinedArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
]

// Input object to check
const inputObject = { id: 2, name: "Alice" }

// Use filter method to check if inputObject matches any object in the predefinedArray
const matchingObjects = predefinedArray.filter(obj =>
    obj.id === inputObject.id && obj.name === inputObject.name
)

// Check if there are any matching objects
if (matchingObjects.length > 0) {
    console.log("Input object matches at least one object in the array.")
} else {
    console.log("Input object does not match any object in the array.")
}*/