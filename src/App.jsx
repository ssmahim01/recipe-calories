import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

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

  return (
    <div className="container mx-auto px-4">
      {/* Header Start */}
      <Header></Header>

      {/* Banner Start */}
      <Banner></Banner>

      {/* Our Recipes Start */}
      <OurRecipes></OurRecipes>

      <section className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4">
        {/* Cards Content */}
        <Recipes handleAddRecipe={handleAddRecipe}></Recipes>

        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;