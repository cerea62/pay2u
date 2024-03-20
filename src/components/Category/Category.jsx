import React from 'react';
import './Category.css'
import CategoryCard from './CategoryCard/CategoryCard';

function Category(props) {
    return (
        <ul className='category'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />

        </ul>
    );
}

export default Category;