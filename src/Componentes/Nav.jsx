import { useState, useRef } from 'react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { BsJustify } from 'react-icons/bs';
import { GiChickenOven } from 'react-icons/gi';
import { FaRandom } from 'react-icons/fa'
import { MdOutlineFoodBank } from 'react-icons/md'
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useMobile from '../Hooks/useMobile';
import useRandomMeal from '../Hooks/useRandomMeal';

export default function Nav() {

  const [activeNav, setActiveNav] = useState(false);
  const [search, setSearch] = useState('');
  const {searchRoute} = useParams();
  const searchQuery = useRef('');
  const navigate = useNavigate();
  const mobile = useMobile();

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    setActiveNav(false);
    setSearch(searchQuery.current.value);
    navigate(`/appderecetas/search/${searchQuery.current.value}`);
  };

  const NavBar = () => {
		return(
        <nav className='flex w-full sticky top-0 bg-slate-50 p-2 z-30 sm:text-sm lg:text-2xl'>
          <form onSubmit={handleSearchSubmit} className='flex items-center ml-1'>
            <button>
              <IoSearchCircleOutline className='text-4xl'/>
            </button>
            <input className='bg-slate-200 rounded p-1 mx-2 min-w-[50px]'
                    placeholder='Recipe, ingredient, area...'
                    type="text"
                    ref={searchQuery} />
          </form>
          <ul className='flex w-full justify-evenly items-center'>
              <li>
                <Link className='flex items-center sub px-2' to={"/appderecetas"}>
                  <MdOutlineFoodBank className='mr-2' />Home
                </Link>
              </li>
              <li>
                <Link className='flex items-center sub px-2' to={"/appderecetas/Categories"}>
                  <GiChickenOven className='mr-2' />Categories
                </Link>
              </li>
              <li>
                <Link onClick={() => useRandomMeal()} className='flex items-center sub px-2' to={'/appderecetas/random'}>
                <FaRandom className='mr-2'/>Random meal
                </Link>
              </li>
          </ul>
        </nav>
		)
  }

const SideBar = () => {
	return(
    <>
      { 
        !activeNav ? 
      <motion.button className='flex justify-end text-2xl p-2 fixed top-6 right-4 bg-[#45D1F4] rounded z-30'
                     onClick={() => setActiveNav(true)}
                     whileTap={{ scale: 0.9}}>
        <BsJustify />
      </motion.button> : 
      <motion.button className='flex justify-end fixed text-2xl top-6 right-4 p-2 bg-[#45D1F4] rounded-full z-30'
                     onClick={() => setActiveNav(false)}
                     whileTap={{ scale: 0.9 }}>
        <RxCross2 />
      </motion.button>
      }
      <AnimatePresence>
      {
        activeNav &&
          <motion.nav className='h-screen w-2/3 pt-4 bg-slate-50 fixed left-0 top-0 z-30'
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.3, ease: easeOut }}>
            <form onSubmit={handleSearchSubmit} 
                  className='flex items-center ml-1'>
              <button>
                <IoSearchCircleOutline className='text-4xl'/>
              </button>
              <input className='bg-slate-200 rounded p-1 mx-2 min-w-[50px]'
                     placeholder='Recipe, ingredient, area...'
                     type="text"
                     ref={searchQuery} />
            </form>
            <ul className='flex flex-col text-2xl mt-4 px-3 h-28 justify-between'>
                <li onClick={() => setActiveNav(false)}>
                  <Link  className='flex items-center py-2 border-[#45D1F4] border-t-2' to={"/appderecetas"}>
                    <MdOutlineFoodBank className='mr-2' />Home
                  </Link>
                </li>
                <li onClick={() => setActiveNav(false)}>
                  <Link  className='flex items-center py-2 border-[#45D1F4] border-t-2' to={"/appderecetas/Categories"}>
                    <GiChickenOven className='mr-2' />Categories
                  </Link>
                </li>
                <li onClick={() => setActiveNav(false)}>
                  <Link onClick={() => useRandomMeal()} className='flex items-center py-2 border-[#45D1F4] border-t-2 border-b-2' to={`/appderecetas/${randomMeal.strMeal}`}>
                    <FaRandom className='mr-2'/>Random meal
                  </Link>
                </li>
            </ul>
          </motion.nav>
      }
      </AnimatePresence>
    </>
		)
	}

	return(
	<>
		  {mobile ? <SideBar /> : <NavBar />}
	</>
	)
}