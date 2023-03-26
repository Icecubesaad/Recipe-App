import React from 'react';
import Sidebar from './Sidebar';

const Home = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
}

export default Home;
