import Header from "./components/Header";
import {  DataProvider } from "./context/AppProvider";
import Products from "./components/Products";
import Categories from "./components/Categories";
 

 

function App() {
  return (
   
    <DataProvider>
      <Header/>
      <Categories/>
      <Products/>
    </DataProvider>

  );
}

export default App;
