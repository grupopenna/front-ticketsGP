import { useState } from 'react';
import logo from '/logo.svg'
import { Menu, ChevronLeft, Assignment, Dashboard, Logout, WorkHistoryRounded } from '@mui/icons-material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { Global } from '../Icons';
import { useAuthContext } from '../../store/useAuthContext';

const Navbar = () => {
  const { logOut } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  // const  { user } =  useAuthContext()
  // console.log(user);

  const user = {
    area: {
      area_id: 8,
      shortName: 'IT'
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getActiveClass = (path: string) => location.pathname === path ? 'bg-[#D2EBFD] dark:bg-[#3A4C2E]' : '';

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
      
    }
    finally{
      navigate('/login')
    }
  }

  return (
    <div className='absolute top-0 left-0 h-full text-black dark:text-white'>
      <div
        className={`fixed top-0 left-0 w-screen h-full ${!isMenuOpen && 'hidden'} z-30 bg-overlay transition-all`}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className={`fixed flex flex-col ${isMenuOpen ? 'w-[20%]' : 'w-[5%]'} h-full justify-between z-40 py-4 px-2  border-black bg-white drop-shadow-lg dark:bg-bgDark-menu dark:drop-shadow-darkMode shadow-xl transition-all`}>
        {/* LOGO */}
        <div className={`flex w-full ${!isMenuOpen && 'items-center flex-col'} gap-5`}>
          <NavLink className={`flex flex-row items-center px-1 justify-center ${isMenuOpen && ''}`} to={'/boards'}>
            <img src={logo} alt='Logo Grupo Penna' className="w-5 h-auto" />
          </NavLink>
          <button className={`flex w-full justify-between items-center ${!isMenuOpen && 'hidden'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <p className={`${!isMenuOpen && 'hidden'} text-xl font-semibold`}>GRUPO PENNA</p>
            <ChevronLeft fontSize='large' />
          </button>
          <button className={`${isMenuOpen && 'hidden'} p-3`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>
        {/* ITEMS MENU */}
        <div className={`flex flex-col w-full h-full gap-2 ${!isMenuOpen ? 'items-center' : 'mt-10'}`}>
          <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/tasks')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/tasks'} onClick={() => setIsMenuOpen(false)}>
            <Assignment color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Mis tareas</p>
          </NavLink>
          <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/boards')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={`/${user.area.area_id}/${user.area.shortName}/boards`} onClick={() => setIsMenuOpen(false)}>
            <Dashboard color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Tickets / Sistemas</p>
          </NavLink>
          {/* <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/objectives')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/objectives'} onClick={() => setIsMenuOpen(false)}>
            <FormatListBulleted color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Objetivos</p>
          </NavLink> */}
          <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/daily-report')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/daily-report'} onClick={() => setIsMenuOpen(false)}>
            <WorkHistoryRounded color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Registro Horario</p>
          </NavLink>
          {/* <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/documentation')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/documentation'} onClick={() => setIsMenuOpen(false)}>
            <InsertDriveFileOutlined color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Documentación</p>
          </NavLink> */}
          {/* <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/chart')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/chart'} onClick={() => setIsMenuOpen(false)}>
            <AccountTree color='inherit' fontSize={'medium'} />
            <p className={`${!isMenuOpen && 'hidden'}`}>Organigrama</p>
          </NavLink> */}
          <NavLink className={`flex flex-row w-full px-1 py-2 ${!isMenuOpen && 'w-auto justify-center'} items-center gap-5 ${getActiveClass('/')} ${'hover:bg-[#E4E7EC] dark:hover:bg-[#344051]'} rounded-lg transition-all`} to={'/'} onClick={() => setIsMenuOpen(false)}>
            <Global/>
            <p className={`${!isMenuOpen && 'hidden'}`}>Empresas</p>
          </NavLink>
        </div>
        {/* THEME & LOG OUT */}
        <div className='flex flex-col w-full items-center gap-1'>
          <ThemeButton isMenuOpen={isMenuOpen} />
          <button className={`flex flex-row w-full justify-center items-center py-2 gap-5 rounded-lg hover:bg-red-600 hover:text-white transition-all`} onClick={() => handleLogOut()}>
            <Logout color={'inherit'} />
            <p className={`${!isMenuOpen && 'hidden'} text-xl font-medium`}>Cerrar sesión</p>
          </button>
        </div>
      </nav >
    </div>
  )
}

export default Navbar;