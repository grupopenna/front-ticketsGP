import React from 'react';
import { ArrowBack, Edit, Tune } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    title: string;
}

const HeaderWithButtons: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className='w-full h-16 flex gap-5 items-center justify-between px-5 py-2 border-b border-gray-300 dark:border-white'>
      <div className='flex gap-5'>
        <button onClick={() => navigate(-1)} className='flex flex-row items-center gap-2 text-[#4F46E5] dark:text-bgDark-pop hover:bg-bgLight-base/10 rounded py-1 px-2 dark:hover:bg-bgDark-pop/10'>
          <ArrowBack />
          <p>Volver</p>
        </button>
        <p className="[font-family:'Roboto-Bold',Helvetica] font-bold  text-2xl">
          {title}
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <input
          placeholder='Buscar Ticket'
          className='btnInput'
          type="text"
        />
        <button className='btnHeader'>
          <Edit />
          <p>Nuevo ticket</p>
        </button>
        <button className='btnHeader'
        >
          <Tune />
          <p>Filtrar</p>
        </button>
      </div>
    </header>
  )
}

export default HeaderWithButtons;