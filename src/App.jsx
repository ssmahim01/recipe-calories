import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddRecipe = recipe => {
   const isExist = recipeQueue.find(prevRecipe => prevRecipe.recipe_id === recipe.recipe_id);
   if(isExist){
    alert('Recipe already Exists');
   }
   else{
    const newRecipe = [...recipeQueue, recipe];
    setRecipeQueue(newRecipe);
   }
};

const handlePrepared = id => {
  const removedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

  const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
  setRecipeQueue(updatedQueue);
  setPreparedRecipe([...preparedRecipe, removedRecipe]);
};

const calculateTimeAndCalories = (time, calories) => {
  setTotalTime(totalTime + parseInt(time));
  setTotalCalories(totalCalories + calories);
};

  return (
    <div className="container mx-auto px-4">
      {/* Header Start */}
      <Header></Header>

      {/* Banner Start */}
      <Banner></Banner>

      {/* Our Recipes Start */}
      <OurRecipes></OurRecipes>

      <section className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4 mb-10">
        {/* Cards Content */}
        <Recipes handleAddRecipe={handleAddRecipe}></Recipes>

        {/* Sidebar */}
        <Sidebar handlePrepared={handlePrepared}
         preparedRecipe={preparedRecipe}
          recipeQueue={recipeQueue} 
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime} 
          totalCalories={totalCalories}
          ></Sidebar>
      </section>
    </div>
  );
};

export default App;