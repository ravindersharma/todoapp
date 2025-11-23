import { useEffect, useState } from "react";
import { LocalStore, UI } from "../utils/constants.js";
import { ThemeContext } from "./ThemeContext.jsx";

export const ThemeProvider = ({ children }) => {
  const stored = localStorage.getItem(LocalStore.THEME);

  const [theme, setTheme] = useState(stored || UI.LIGHT_THEME);

  //Apply theme to html  for tailwind dark classes
  useEffect(() => {
    // const root = document.documentElement;
    // if (theme === UI.DARK_THEME) {
    //   root.classList.add(UI.DARK_THEME);
    // } else {
    //   root.classList.remove(UI.DARK_THEME);
    // }
    document.documentElement.classList.toggle(
      UI.DARK_THEME,
      theme === UI.DARK_THEME
    );
    localStorage.setItem(LocalStore.THEME, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) =>
      prev === UI.LIGHT_THEME ? UI.DARK_THEME : UI.LIGHT_THEME
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
