import React, { useEffect, useState } from 'react';
import { HeaderComponent, Icon, ToggleButton } from './styles';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonLine } from '@fortawesome/free-regular-svg-icons'

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
                <Icon>{isDarkMode ? <FontAwesomeIcon icon={faMoonLine} /> : <FontAwesomeIcon icon={faMoon} />}</Icon>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </ToggleButton>
        </HeaderComponent>
    );
};

export default Header;
