import React, { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    );
}

export default Main;
