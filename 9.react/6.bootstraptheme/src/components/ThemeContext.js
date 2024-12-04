import { createContext, useContext, useState } from "react";

// 빈 공간(Context)을 선언함
const ThemeContext = createContext();
// Provider가 정보를 제동하는 제공자

const ThemeSelect = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // 이전 테마 상태 가져다 반전
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
      {/* 나 (ThemeContext) 를 감싼 하위 child들은 내 context에 접근이 가능함 */}
    </ThemeContext.Provider>
  );
};

// Custom Hook: 내가 직접 훅을 생성
const useTheme = () => useContext(ThemeContext);

export { ThemeSelect, useTheme };
