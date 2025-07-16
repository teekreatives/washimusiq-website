import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ inline }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  if (inline) {
    return (
      <button
        onClick={toggleTheme}
        className="p-1 bg-zinc-800 dark:bg-zinc-700 rounded-full border border-zinc-700 dark:border-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-300"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{ position: 'static', boxShadow: 'none' }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-gold-400" />
        ) : (
          <Moon className="w-5 h-5 text-gold-400" />
        )}
      </button>
    );
  }
  // Desktop/global style (make smaller)
  return (
    <button
      onClick={toggleTheme}
      className="p-1 bg-zinc-800 dark:bg-zinc-700 rounded-full border border-zinc-700 dark:border-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-300"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gold-400" />
      ) : (
        <Moon className="w-5 h-5 text-gold-400" />
      )}
    </button>
  );
} 