'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import UiButton from './BasicButton';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);



  return (
    <UiButton
      variant="outlined"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative h-12 w-12 rounded-full p-0 min-w-0"
      aria-label="Toggle dark mode"
      sx={{
        '&.MuiButton-root': {
          borderWidth: '1px',
          borderColor: 'divider',
        }
      }}
    >
      <div className="relative h-10 w-10">
        <FaSun className="absolute inset-0 m-auto h-6 w-6 transition-all duration-300 rotate-90 scale-0 dark:scale-100 dark:-rotate-0" />
        <FaMoon className="absolute inset-0 m-auto h-6 w-6 transition-all duration-300 rotate-0 scale-100 dark:scale-0 dark:rotate-90" />
      </div>
    </UiButton>
  );
}

export default ToggleButton;