const searchform= document.querySelector('form');
const searchResultDiv= document.querySelector('.search-result');
const container= document.querySelector('.container');
let searchQuery='';
const APP_ID= '25c90ca8';
const APP_KEY= 'f600caa8ceafa6a0679f9a07e4c1821b';
searchform.addEventListener('submit',(e)=>
{
    e.preventDefault();
    searchQuery= e.target.querySelector('input').value;
    fetchAPI();
})
async function fetchAPI()
{
    const baseURL= `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const response= await fetch(baseURL);
    const data= await response.json();
    generateHTML(data.hits);
    console.log(data);

}

function generateHTML(results)
{
    let generatedHTML='';
    
                results.map(result => {
                    generatedHTML+=
                    `<div class="item">
                    <img src="${result.recipe.image}">
                    <div class="flex-container">
                        
                        <h1 class="title">"${result.recipe.label}"</h1>
                        <a class="view-button" href="${result.recipe.url}" target="_blank" >View Recipe</a>
                    </div>
                    <p class="item-data">Calories:${Math.round(result.recipe.calories)}</p>
                    <p class="item-data">Health Label:${result.recipe.healthLabels}</p>
                    <p class="item-data">Diet Label:${result.recipe.dietLabels.length>0?result.recipe.dietLabels:"No data found"}</p>

                    </div>;`

                })

    searchResultDiv.innerHTML = generatedHTML;

}
// document.getElementsByClassName(search-result).innerHTML = generatedHTML;
// searchResultDiv.innerHTML= generatedHTML;













