import PropTypes from 'prop-types';

const Recipe = ({recipe, handleAddRecipe}) => {
  return (
    <div className="card bg-base-100 border-2">
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

        <div className="flex gap-4">
            <div className="flex items-center gap-2">
            <i className="fa-regular fa-clock text-2xl"></i>
            <p className="text-gray-600 font-medium">{recipe.preparing_time} minutes</p>
            </div>

            <div className="flex items-center gap-2">
            <i className="fa-solid fa-fire text-2xl"></i>
            <p className="text-gray-600 font-medium">{recipe.calories} calories</p>
            </div>
        </div>
        <div className="card-actions">
        <button onClick={() => handleAddRecipe(recipe)} className="btn bg-green-400 rounded-full mt-4 px-8 text-gray-800 font-bold">
            Want to Cook
        </button>
        </div>
    </div>
    </div>
  )
}

Recipe.propTypes = {
    recipe: PropTypes.array,
    handleAddRecipe: PropTypes.func
}

export default Recipe;