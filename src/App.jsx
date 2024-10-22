import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header Start */}
      <Header></Header>

      {/* Banner Start */}
      <Banner></Banner>

      {/* Our Recipes Start */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;