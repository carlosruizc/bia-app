import React from 'react';
import Header from '../Header/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ width: "100%" }}>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
