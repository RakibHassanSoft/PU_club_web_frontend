import React from 'react';
import { Outlet } from 'react-router-dom';

const Course = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Course;