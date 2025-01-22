import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppProvider= createContext();

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get("https://fakestoreapi.com/products/categories");
        const productsResponse = await axios.get("https://fakestoreapi.com/products");

        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppProvider.Provider
      value={{
        categories,
        products,
        selectedCategory,
        setSelectedCategory,searchQuery, setSearchQuery 
       
   
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};
