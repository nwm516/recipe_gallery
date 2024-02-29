import React from 'react';
import styled from 'styled-components';
import './RecipeGallery.css';

const recipes = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "/carbonara.jpg" },
    { id: 2, title: "Cashew Pad Thai Noodles", ingredients: ["Pad Thai Noodles", "Eggs", "Chicken", "Shrimp", "Cashews"], image: "/pad thai.jpg" },
    { id: 3, title: "Chop-chop Chicken Bowl", ingredients: ["Chicken", "Shredded Lettuce", "Rice", "Beans", "Special Sauce"], image: "/chop chop chicken.jpg" },
    { id: 4, title: "Sirloin Steak Meal", ingredients: ["Sirloin Steak", "Quinoa", "Salad"], image: "steak.jpg" },

];

/* Had some help in searching online and found out about styled-components to aid in output for the recipe cards. */

const RecipeCard = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
`;

const RecipeTitle = styled.h2`
  margin-bottom: 10px;
`;

const RecipeIngredients = styled.p`
  margin: 0;
`;

function RecipeGallery() {
    return (
    <ul>
        {recipes.map(recipe => (
           <RecipeCard key={recipe.id}>
                <RecipeTitle>Recipe of the Day: {recipe.title}</RecipeTitle>
                <RecipeIngredients><b>Ingredients:</b> {recipe.ingredients.join(', ')}</RecipeIngredients>   {/* .join adds a comma and a space for readability */}
                <RecipeImage src = {recipe.image} alt={recipe.title} />
           </RecipeCard> 
        ))}
    </ul>
    );
};

export default RecipeGallery;