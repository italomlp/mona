import React from 'react';

// import { Container } from './styles';

import { useTheme } from '../../styles/ThemeContext';

export default function Main() {
  const themeToggle = useTheme();

  return (
    <div>
      <h1>Main</h1>
      <button type="button" onClick={() => themeToggle.toggle()}>
        switch theme
      </button>
    </div>
  );
}
