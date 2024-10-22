import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header Start */}
      <Header></Header>

      {/* Banner Start */}
      <Banner></Banner>

      {/* Our Recipes Start */}
      <OurRecipes></OurRecipes>

      <section className="w-11/12 mx-auto flex flex-col md:flex-row gap-4">
        {/* Cards Content */}
        <Recipes></Recipes>

        {/* Sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;