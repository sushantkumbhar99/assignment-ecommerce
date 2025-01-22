import React, { useState, useContext } from 'react';
 
import { AppProvider } from '../context/AppProvider';

const Categories = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Toggle offcanvas visibility
    const { categories, setSelectedCategory } = useContext(AppProvider); // Assuming the categories and selectedCategory are in context

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas); // Toggle the offcanvas
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Set the selected category
        setShowOffcanvas(false); // Close the offcanvas when a category is selected
    };

    return (
        <div>
            {/* Button to toggle offcanvas */}
            <button className="btn btn-primary my-2 mx-3" onClick={toggleOffcanvas}>
                All Categories
            </button>

            {/* Offcanvas Component */}
            <div
                className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} text-bg-dark mt-5`}
                tabIndex="-1"
                id="offcanvasDark"
                aria-labelledby="offcanvasDarkLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkLabel">
                        Categories
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={toggleOffcanvas}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        {/* Render categories dynamically */}
                        <li className="list-group-item">
                            <button
                                className="btn btn-link"
                                onClick={() => handleCategorySelect(null)} // Show all products
                            >
                                All Categories
                            </button>
                        </li>
                        {categories.map((category, index) => (
                            <li key={index} className="list-group-item">
                                <button
                                    className="btn btn-link"
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;
