import { useParams, Link } from "react-router-dom";
import useMealSearch from "../Hooks/UseMealSearch";

export default function SearchEngine(){

  const {searchRoute} = useParams()

  const meals = useMealSearch(searchRoute)

  if (!meals) {
    return <div className="flex h-screen justify-center items-center text-3xl">No results found</div>;
  };

  console.log(meals)

    return(
      <section className='flex flex-col items-center w-full z-10'>
        <ul className='grid grid-cols-2 gap-5 w-full justify-items-center text-center p-8 sm:grid-cols-3 lg:grid-cols-4'>
          {
            meals.map(meal => (
              <li className='relative' key={meal.idMeal}>
                <Link to={`/${meal.strMeal}`}>
                  <img className='rounded object-fill max-h-72' src={meal.strMealThumb} alt={'Imagen de' + meal.strMeal} />
                  <p className='p-1 text-sm absolute bottom-0 bg-opacity-80 bg-[#45D1F4] w-full'>
                    {meal.strMeal}
                  </p>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    )
}