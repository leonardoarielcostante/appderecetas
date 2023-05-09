import {Routes, Route} from "react-router-dom"
import Nav from "./Componentes/Nav"
import Principal from "./Routes/Principal"
import Categories from "./Routes/Categories"
import Meal from "./Componentes/Meal";
import IngredientMeal from "./Routes/IngredientMeal";
import SearchEngine from "./Componentes/SearchEngine";
import CategoryMeals from "./Routes/CategoryMeals";

function App() {

  return (
      <>
      <header>
          <Nav />
      </header>
      <main>
        <article>
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/search/:searchRoute" element={<SearchEngine />} />
              <Route path="/search/" element={<div className="flex h-screen justify-center items-center text-xl">No results found</div>} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/Categories/:categoryMeals" element={<CategoryMeals />} />
              <Route path="/Ingredients/:ingredient" element={<IngredientMeal />} />
              <Route path="/:meal" element={<Meal />} />
            </Routes>
        </article>
      </main>
      </>
  )
}

export default App