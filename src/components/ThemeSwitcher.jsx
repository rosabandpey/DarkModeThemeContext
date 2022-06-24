import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import {useTheme} from "../useTheme"
import { ThemeContext } from "../providers/ThemeProvider"
import { useState } from "react";



const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  
  const {isDark,handleDark,themeMode,handleTheme}=useContext(ThemeContext)

  const handleThemeChange = (e) => {
     handleDark()
     handleTheme()
  }

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
