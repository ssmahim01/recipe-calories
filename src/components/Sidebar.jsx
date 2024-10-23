import PropTypes from "prop-types";

const Sidebar = ({recipeQueue, handlePrepared, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
    return (
        <div className="lg:w-1/3 lg:mt-0 mt-5 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">

            {/* Want to Cook Table */}
           <div className="overflow-x-auto mt-5">
           <h2 className="text-gray-800 text-2xl font-bold text-center">Want to Cook: {recipeQueue.length}</h2>

        <div className="border w-4/5 mx-auto my-4"></div>

        <table className="table">

            {/* head */}
            <thead>
            <tr className="text-base">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
           {recipeQueue.map((recipe, index) => 
                <tr key={index} className="hover text-gray-500 font-semibold">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
             <td><button onClick={() => {
                handlePrepared(recipe.recipe_id)
                calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                }} className="bg-green-400 rounded-full px-3 py-2 my-2 text-gray-800 text-xs font-bold">
                 Preparing
             </button></td>
            </tr>
            )}
            </tbody>
        </table>
        </div>

        {/* Currently Cooking Table */}
        <div className="overflow-x-auto mt-10">
        <h2 className="text-gray-800 text-2xl font-bold text-center">Currently Cooking: {preparedRecipe.length}</h2>

        <div className="border w-4/5 mx-auto my-4"></div>

        <table className="table">

        {/* head */}
        <thead>
        <tr className="text-base">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
        </tr>
        </thead>
        <tbody>
            {preparedRecipe.map((recipe, index) => 
                <tr key={index} className="hover text-gray-500 font-semibold">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
            </tr>
            )}
            <tr className="border-none text-gray-500 font-semibold">
            <th></th>
                <td></td>
                <td className="text-center">Total Time: {totalTime}</td>
                <td className="text-center">Total Calories: {totalCalories}</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array,
    handlePrepared: PropTypes.func,
    preparedRecipe: PropTypes.array,
    calculateTimeAndCalories: PropTypes.func,
    totalTime: PropTypes.array,
    totalCalories: PropTypes.array
}

export default Sidebar;