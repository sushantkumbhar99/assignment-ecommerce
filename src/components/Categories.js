// // import React, { useState, useContext } from 'react';
 
// // import { AppProvider } from '../context/AppProvider';

// // const Categories = () => {
// //     const [showOffcanvas, setShowOffcanvas] = useState(true); // Toggle offcanvas visibility
// //     const { categories, setSelectedCategory } = useContext(AppProvider); // Assuming the categories and selectedCategory are in context

// //     const toggleOffcanvas = () => {
// //         setShowOffcanvas(!showOffcanvas); // Toggle the offcanvas
// //     };

// //     const handleCategorySelect = (category) => {
// //         setSelectedCategory(category); // Set the selected category
// //         setShowOffcanvas(false); // Close the offcanvas when a category is selected
// //     };

// //     return (
// //         <div>
// //             {/* Button to toggle offcanvas */}
// //             <button className="btn btn-primary my-2 mx-3" onClick={toggleOffcanvas}>
// //                 All Categories
// //             </button>

// //             {/* Offcanvas Component */}
// //             <div
// //                 className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} text-bg-dark mt-5`}
// //                 tabIndex="-1"
// //                 id="offcanvasDark"
// //                 aria-labelledby="offcanvasDarkLabel"
// //             >
// //                 <div className="offcanvas-header">
// //                     <h5 className="offcanvas-title" id="offcanvasDarkLabel">
// //                         Categories
// //                     </h5>
// //                     <button
// //                         type="button"
// //                         className="btn-close btn-close-white"
// //                         onClick={toggleOffcanvas}
// //                         aria-label="Close"
// //                     ></button>
// //                 </div>
// //                 <div className="offcanvas-body">
// //                     <ul className="list-group">
// //                         {/* Render categories dynamically */}
// //                         <li className="list-group-item">
// //                             <button
// //                                 className="btn btn-link"
// //                                 onClick={() => handleCategorySelect(null)} // Show all products
// //                             >
// //                                 All Categories
// //                             </button>
// //                         </li>
// //                         {categories.map((category, index) => (
// //                             <li key={index} className="list-group-item">
// //                                 <button
// //                                     className="btn btn-link"
// //                                     onClick={() => handleCategorySelect(category)}
// //                                 >
// //                                     {category}
// //                                 </button>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Categories;

// import React, { useState, useContext, useEffect } from "react";
// import { AppProvider } from "../context/AppProvider";

// const Categories = () => {
//     const [showOffcanvas, setShowOffcanvas] = useState(false);
//     const { categories, setSelectedCategory } = useContext(AppProvider);
//     const [selectedCategories, setSelectedCategories] = useState([]);

//     // ✅ Ensure all products are shown initially
//     useEffect(() => {
//         setSelectedCategory(null);
//     }, [setSelectedCategory]);

//     const toggleOffcanvas = () => {
//         setShowOffcanvas(!showOffcanvas);
//     };

//     const handleCategoryChange = (category) => {
//         let updatedCategories;

//         if (category === "all") {
//             updatedCategories = [];
//         } else {
//             updatedCategories = selectedCategories.includes(category)
//                 ? selectedCategories.filter((cat) => cat !== category) // Remove if already selected
//                 : [...selectedCategories, category]; // Add if not selected
//         }

//         setSelectedCategories(updatedCategories);
//         setSelectedCategory(updatedCategories.length > 0 ? updatedCategories : null);
//     };

//     return (
//         <div>
//             <button className="btn btn-primary my-2 mx-3" onClick={toggleOffcanvas}>
//                 Select Categories
//             </button>

//             <div
//                 className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} text-bg-dark mt-5`}
//                 tabIndex="-1"
//                 id="offcanvasDark"
//                 aria-labelledby="offcanvasDarkLabel"
//             >
//                 <div className="offcanvas-header">
//                     <h5 className="offcanvas-title" id="offcanvasDarkLabel">Categories</h5>
//                     <button type="button" className="btn-close btn-close-white"
//                         onClick={toggleOffcanvas} aria-label="Close"></button>
//                 </div>
//                 <div className="offcanvas-body">
//                     <ul className="list-group">
//                         <li className="list-group-item">
//                             <input
//                                 type="checkbox"
//                                 checked={selectedCategories.length === 0}
//                                 onChange={() => handleCategoryChange("all")}
//                             />
//                             <label className="ms-2">All Categories</label>
//                         </li>
//                         {categories.map((category, index) => (
//                             <li key={index} className="list-group-item">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedCategories.includes(category)}
//                                     onChange={() => handleCategoryChange(category)}
//                                 />
//                                 <label className="ms-2">{category}</label>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Categories;


// components/Categories.js
import React, { useState, useContext } from 'react';
import { AppProvider } from '../context/AppProvider';

const Categories = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(true);
    const { categories, selectedCategories, setSelectedCategories } = useContext(AppProvider);

    const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleAllCategories = () => {
        setSelectedCategories([]);
    };

    return (
        <div>
            <button className="btn btn-primary my-2 mx-3" onClick={toggleOffcanvas}>
                Filter Categories ({selectedCategories?.length || 'All'})
            </button>

            <div className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} text-bg-dark mt-5`}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Categories</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={toggleOffcanvas}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={!selectedCategories?.length}
                                    onChange={handleAllCategories}
                                    id="allCategories"
                                />
                                <label className="form-check-label" htmlFor="allCategories">
                                    All Categories
                                </label>
                            </div>
                        </li>
                        {categories?.map((category, index) => (
                            <li key={category} className="list-group-item">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={selectedCategories?.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        id={`category-${index}`}
                                    />
                                    <label className="form-check-label" htmlFor={`category-${index}`}>
                                        {category}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;