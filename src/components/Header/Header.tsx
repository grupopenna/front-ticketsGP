import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='w-full h-16 flex items-center px-5 py-2 border-b border-gray-300 dark:border-white'>
      <p className="[font-family:'Roboto-Bold',Helvetica] font-bold  text-2xl">
        {title}
      </p>
    </header>
  )
}

export default Header;