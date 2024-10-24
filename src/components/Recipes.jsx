import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";

const Recipes = ({handleAddRecipe}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(response => response.json())
        .then(data => setRecipes(data))
    }, []);
    
    return (
        <div className="lg:w-2/3">

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {
            recipes.map(recipe => 
                <Recipe key={recipe.recipe_id} recipe={recipe} handleAddRecipe={handleAddRecipe}></Recipe>
            )
        }
          </div>
        </div>
    );
};

Recipes.propTypes = {
    handleAddRecipe: PropTypes.func
}

export default Recipes;