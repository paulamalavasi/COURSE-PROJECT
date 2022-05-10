
function whatsForDinner(){
    var mealBase = prompt ("What is your meal base? rice, wrap, pasta");
  
    switch (mealBase) {
        case "rice":
            var  mealProtein = prompt ("What is your meal protein? salmon, chicken, tuna");

            if (mealProtein =="salmon"){
                window.open("https://www.bbcgoodfood.com/recipes/steamed-salmon-veg-rice-bowl/");
            }
            if (mealProtein == "chicken"){
                window.open("https://www.tablespoon.com/recipes/one-pot-creamy-garlic-chicken-and-rice/172e18b7-4f35-4413-8474-a532c2cfaf3c/");
            }
            if (mealProtein =="tuna"){
                window.open("https://www.theroastedroot.net/tuna-rice-casserole-low-fodmap/");
            }
            break;

        case "wrap":
            var mealProtein = prompt ("What is your meal protein? chicken, salmon, tuna");

            if (mealProtein =="chicken"){
                window.open("https://www.simplejoy.com/chicken-wrap/");
            }
            if (mealProtein =="salmon"){
                window.open("https://hungryhealthyhappy.com/salmon-wrap/");
            }
            if (mealProtein =="tuna"){
                window.open("https://thehealthyfoodie.com/tuna-wrap/");
            }
            break;

        case "pasta":
            var mealProtein = prompt ("What is your meal protein? tuna, chicken, salmon");

            if (mealProtein =="tuna"){
               window.open("https://www.bbcgoodfood.com/recipes/tuna-pasta-bake/");
            }
            if (mealProtein =="chicken"){
                window.open("https://www.thechunkychef.com/one-pot-chicken-parmesan-pasta/");
            }
            if (mealProtein =="salmon"){
                window.open("https://www.bbcgoodfood.com/recipes/creamy-salmon-pasta/");
            }
            break;
    
        default:
            alert("Invalid option");
            break;
    }
}
function showRecipes(ingredient){

    var links = document.getElementById('links').getElementsByTagName('div');

    for( i=0; i< links.length; i++ )
    {
        var recipeDiv = links[i];

        if(recipeDiv.classList.contains(ingredient))
        {
            
            recipeDiv.style.display = 'block';
        }
        else
        {
            recipeDiv.style.display = 'none';
        }
    }
}

function showAllRecipes(){
    var links = document.getElementById('links').getElementsByTagName('div');
    for(i=0; i< links.length; i++)
    {
        var recipeDiv = links[i];
        recipeDiv.style.display = 'block';
    }
}