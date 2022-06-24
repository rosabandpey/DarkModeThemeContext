import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { THEME_TYPE } from "../constants";



const ThemeProvider = ({ children }) => {
  const [isDark,setDarkMode]=useState(false)
  const [themeMode,setThemeMode] = useState(THEME_TYPE.LIGHT)

  const handleTheme=()=>{

    if(isDark)
    {
     setThemeMode(THEME_TYPE.LIGHT);
    }
    if(!isDark)
    {
     setThemeMode(THEME_TYPE.DARK);
    }
    
  }
  const handleDark=()=>{
     setDarkMode(!isDark)
     
  }

  return <ThemeContext.Provider value={{isDark,handleDark,themeMode,handleTheme}}>{children}</ThemeContext.Provider>;
};



const ThemeContext = createContext();

export { ThemeContext }

export default ThemeProvider;