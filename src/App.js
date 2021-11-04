import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();
function App() {
  
  const [category,setCategory] = useState('Laptop');
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      
      {/* <Header count={count} setCount={setCount}></Header> */}
      <p>Count Value: {category}</p>
      <Header ></Header>
      <Home category={category}></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
    
  );
}

export default App;
