import React, { useState } from 'react';
import { HiMoon, HiOutlineMoon } from 'react-icons/hi';
import { ToggleButton, Icon } from './StyledComponents'

const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ToggleButton onClick={toggleMode}>
      <Icon>{isDarkMode ? <HiOutlineMoon /> : <HiMoon />}</Icon>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </ToggleButton>
  );
};

export default ModeToggle;
