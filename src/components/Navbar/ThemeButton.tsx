import React, { useEffect, useState } from "react";
import { Moon, Sun } from "../Icons";

interface ButtonProps {
  isMenuOpen: boolean;
}

const ThemeButton: React.FC<ButtonProps> = ({ isMenuOpen }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.getElementById('root')?.classList.add("dark");
    } else {
      document.getElementById('root')?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="w-full">
      {isMenuOpen ? (
        <div className="w-full flex justify-between bg-bgLight-cards dark:bg-bgDark-sectionBg p-2 gap-2 rounded">
          <button onClick={() => setTheme("light")} className="flex w-full gap-3 p-2 bg-white dark:bg-transparent rounded hover:dark:bg-bgLight-hover hover:dark:text-bgLight-base text-bgLight-base dark:text-colOff-off">
            <Sun />
            <p className="">Claro</p>
          </button>
          <button onClick={() => setTheme("dark")} className="flex w-full gap-3 p-2 text-colOff-off dark:bg-bgDark-selected rounded dark:text-bgDark-pop hover:text-bgDark-pop hover:bg-bgDark-hover">
            <Moon />
            <p className="">Oscuro</p>
          </button>
        </div>
      ) : (
        <button
          onClick={handleChangeTheme}
          className="w-full flex justify-center px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-bgLight-hover hover:dark:bg-bgDark-hover"
        >
          {theme === "light" 
          ? <Sun /> : <Moon />}
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
