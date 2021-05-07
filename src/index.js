const fetch = require("node-fetch");


console.log('Hello, Glovo!')
console.log()

// Cocktails beginning with 'G'

fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
    .then(res => res.json())
    .then(data => drinks(data)) 
   
function drinks(data) {
    
    console.log(`Total of Cocktails beginning with 'G':${data.drinks.length}`)
    console.log()

    let CocktailsWithG = ""

    for (let i = 0; i < data.drinks.length; i++){

      CocktailsWithG = `${CocktailsWithG}'${data.drinks[i].strDrink}',`

    }
    console.log(`The Names of the Cocktails beginning with 'G':${CocktailsWithG}`)

    console.log("********************************************************") // just to make the logs more readable
    console.log()                                                          // just to make the logs more readable
}
 

// Cocktails with more than 4 ingredients

fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(byIngredients => moreThanFourIngredients(byIngredients))

function moreThanFourIngredients(byIngredients) {

    let cocktailsMoreThan4 = ""

    for (let i = 0; i < byIngredients.drinks.length; i++) {

        if (byIngredients.drinks[i].strIngredient5 != null) {
           cocktailsMoreThan4 = `${cocktailsMoreThan4}'${byIngredients.drinks[i].strDrink}',`
        
         } 
        
    }
    
    console.log(`Cocktails with more than 4 ingredients:${cocktailsMoreThan4}`)
    
    console.log("********************************************************")// just to make the logs more readable
    console.log()                                                          // just to make the logs more readable
}


// Cocktails with just ID, Name and Ingredient

fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(cocktails => data(cocktails))

function data(cocktails) {

    let data = ""

    for (let i = 0; i < cocktails.drinks.length; i++) {

        let ingredientsList = []

        for (let j = 0; j < cocktails.drinks[i].length; j++) {
          
            if (cocktails.drinks[i].includes("strIngredient1")) {
                ingredientsList.push(cocktails.drinks[i].strDrink)
                
            }
            
        }

        if (cocktails.drinks[i].idDrink != null && cocktails.drinks[i].strDrink != null && cocktails.drinks[i].strIngredient1 != null) {
           data = `${data}'{Name:${cocktails.drinks[i].strDrink}', Id:${cocktails.drinks[i].idDrink}, Ingredients:["${ingredientsList}",]'}`
        
         } 
        
    }
    
    console.log(`The  Cocktails with just ID, Name and Ingredient are:${data}`)

    console.log("********************************************************")// just to make the logs more readable
    console.log()                                                          // just to make the logs more readable
}

