// 다크 모드 Provider 설정
import React, { createContext, useState, useContext, useCallback } from "react";
import { lightTheme, darkTheme } from "styles/Theme";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

// 로컬 스토리지를 통해 dark, light을 업데이트 (추후 접속 시에도 상태가 유지됨)
const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [themeMode, setThemeMode] = useState(LocalTheme);
  const themeObject = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === "light") {
      setThemeMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setThemeMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [themeMode, setThemeMode]);

  return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };

export default ThemeProvider;
