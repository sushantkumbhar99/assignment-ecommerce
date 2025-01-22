import React ,{useContext} from 'react';
import { AppProvider } from '../context/AppProvider';
 
const Header = () => {
    const { searchQuery, setSearchQuery } = useContext(AppProvider);
    const handleSearchSubmit = (e) => {
        e.preventDefault();  
      
      };

  return (
    <div>
              <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
      <h3 className='navbar-brand'>Flone</h3>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit} >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
        
      
    </div>
  );
}

export default Header;
