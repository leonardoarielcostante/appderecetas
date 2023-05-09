import { Link } from 'react-router-dom';
import useMealCategory from '../Hooks/useMealCategory';

export default function Recomendations() {

  const meals = useMealCategory('chicken');

  if (!meals) {
    return <div className="flex h-screen justify-center items-center text-3xl">Loading...</div>;
  };

    return(
      <section className='flex flex-col items-center w-full z-10'>
        <h2 className='w-1/2 text-base text-center my-5 bg-[#45D1F4] bg-opacity-60 rounded sm:text-2xl xl:text-3xl'>Recomendations</h2>
        <ul className='grid grid-cols-2 gap-5 w-full justify-items-center text-center p-8 sm:grid-cols-3 lg:grid-cols-4'>
          {
            meals.map(meal => (
              <li className='relative' key={meal.idMeal}>
                <Link to={`/${meal.strMeal}`}>
                  <img className='rounded object-fill max-h-72' src={meal.strMealThumb} alt={'Imagen de' + meal.strMeal} />
                  <p className='p-1 text-sm absolute bottom-0 bg-opacity-80 bg-[#45D1F4] w-full sm:text-base lg:text-xl'>
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