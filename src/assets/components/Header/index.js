import React from 'react';
import '../../css/header.css';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
    } = props
    return (
        <header>
            <h1>
                <a href='/'>Juan José Paz</a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category} >
                            <span 
                            onClick={() => {
                                setCurrentCategory(category);
                            }}>
                            {category}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;