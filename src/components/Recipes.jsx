import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(response => response.json())
        .then(data => setRecipes(data))
    }, []);
    
    return (
        <div className="md:w-2/3">
            Recipes {recipes.length}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {
            recipes.map(recipe => 
                <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
                    <figure className="pt-6 px-8">
                        <img className="w-full md:h-48 rounded-xl"
                        src={recipe.recipe_image} />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-gray-800 font-bold">{recipe.recipe_name}</h2>
                    <p className="text-gray-500 font-medium">{recipe.short_description}</p>

                    <h3 className="text-lg text-gray-800 font-bold">Ingredients: {recipe.ingredients.length}</h3>

                    <ul className="list-disc text-lg text-gray-500 font-medium ml-8">
                        {
                            recipe.ingredients.map((item, index) => 
                                <li key={index}>{item}</li>
                            )
                        }
                    </ul>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            )
        }
          </div>
        </div>
    );
};

export default Recipes;