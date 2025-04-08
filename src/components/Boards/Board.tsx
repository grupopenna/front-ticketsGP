import React from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundSoftland, backgroundNewRequirements, backgroundAppAndWeb, backgroundITSupport, backgroundIndicatorSupport } from '../../assets/Boards';

interface BoardProps {
  id:number;
  key: string;
  name: string;
  managers: any;
  content: any;
  navigate: string;
}

const Board: React.FC<BoardProps> = ({ id, key, name, managers, content, navigate }) => {
  const navigation = useNavigate();

  const navigationTo = () => {
    navigation(`/board/${id}/${navigate}`)
  };

  const imageToRender:any = {
    'ERP': backgroundSoftland,
    'NR': backgroundNewRequirements,
    'DEV': backgroundAppAndWeb,
    'SOP': backgroundITSupport,
    'IND': backgroundIndicatorSupport,
  };

  return (
    <div key={key} className={`relative flex flex-col w-[15em] h-[83vh] z-10 p-2 rounded-xl backdrop-blur-xl bg-[#f2f4f7] dark:bg-bgDark-cards shadow-lg cursor-pointer overflow-hidden`} onClick={navigationTo}>
      {Object.keys(imageToRender).includes(key) &&
        <img src={imageToRender[navigate]} alt='softland logo' className='absolute top-20 right-5 opacity-30 scale-[140%]' />
      }
      <p className={`flex h-[12%] z-20 justify-center items-center px-4 mb-4 border-b-4 border-white text-center text-xl font-semibold`}>{name}</p>
      <div className={`flex flex-col h-[60%] overflow-y-auto z-20 p-2 mb-4 rounded-xl bg-white/30 dark:bg-[#121212]/30 shadow-lg text-xs font-semibold`}>
          <p className='font-semibold'>Ingresa un Ticket acá si:</p>
          {content.length > 0 && content.map((c:any) => <li className='py-2'>{c}</li>)}
      </div>
      <div className={`flex flex-col h-[25%] overflow-y-auto z-20 p-2 rounded-xl bg-white/30 dark:bg-[#121212]/30 shadow-lg text-xs font-semibold`}>
        <p className='font-semibold'>Encargados:</p>
        <ul>
          {managers.length > 0 && managers.map((manager: any, index: any) => (
            <li className='py-1' key={index}>{manager?.fullname}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Board;