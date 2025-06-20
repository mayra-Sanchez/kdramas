import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("kdrama-theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
    localStorage.setItem("kdrama-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
};

export default useTheme;
