import React, { useEffect, useState } from 'react';
import { HeaderComponent, Icon, ToggleButton } from './styles';
import { useTheme } from 'next-themes';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';


const Header: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <HeaderComponent >
            <h2>Where in the world?</h2>
            <ToggleButton
                value={theme}
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                    setIsDarkMode(!isDarkMode)
                }}>
                <Icon>{isDarkMode ? <HiOutlineMoon /> : <HiMoon />}</Icon>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </ToggleButton>
        </HeaderComponent>
    );
};

export default Header;
