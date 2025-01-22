import React,{useContext} from 'react';
import { AppProvider } from '../context/AppProvider';

const Products = () => {

    const { products, selectedCategory, searchQuery } = useContext(AppProvider);

    // Filter products by category and search query
    const filteredProducts = products.filter((product) => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="row">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div key={product.id} className="col-md-4 col-lg-3 mb-3 ">
          <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            
              style={{
                height: "200px",  
                objectFit: "cover",  
                objectPosition: "center",  
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p
                className="card-text"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 3, // Limit to 3 lines
                }}
              >
                {product.description}
              </p>
              <p className="card-text">
                <strong>${product.price}</strong>
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
);
//     <div>
//        <div className="product-list">
//       {filteredProducts.map((product) => (
//         <div key={product.id} className="card" style={{ width: "18rem" }}>
//           <img src={product.image} className="card-img-top" alt={product.title} />
//           <div className="card-body">
//             <p className="card-text">{product.title}</p>
//             <p className="card-text">${product.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
}

export default Products;
