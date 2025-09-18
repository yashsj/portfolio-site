import { Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from 'react';

// Accept a 'mobile' prop: if true, render as mobile inline button; else as fixed desktop button
export const ThemeToggle = ({ mobile = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        mobile
          ? "p-2 rounded-full transition-colors duration-300 focus:outline-none" // Mobile: normal, inline
          : "fixed hidden md:block top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none" // Desktop: fixed, only md+
      )}
      aria-label="Toggle theme"
      type="button"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
