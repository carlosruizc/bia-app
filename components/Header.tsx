import React from 'react';
import { HeaderComponent } from './StyledComponents';
import ModeToggle from './ModeToggle';


const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <h2>Where in the world?</h2>
            <ModeToggle />
        </HeaderComponent>
    );
};

export default Header;
