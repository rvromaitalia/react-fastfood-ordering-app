import { useState } from 'react'
import Header from './components/Header';
import FoodCard from './components/FoodCard';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="container mt-4">
        
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        <div className="container py-4">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
       
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col border p-3"> Header/ Theme Toggle</div>
          <div className="col border p-3"></div>
          <div className="col border p-3"></div>
        </div>
        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col border p-3">
            <FoodCard 
              title="Burger" 
              description="A delicious burger with fresh ingredients" 
              price={50} 
            />
          </div>
          <div className="col border p-3">
            <FoodCard 
              title="Pizza" 
              description="Cheesy pizza with your favorite toppings" 
              price={110} 
            />
          </div>
          <div className="col border p-3">
            <FoodCard 
              title="Fries" 
              description="Crispy fries served hot" 
              price={35} 
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col border p-3">Order Summary</div>
          <div className="col border p-3"></div>
          <div className="col border p-3"></div>
        </div>
        {/* Row 4 */}
        <div className="row mb-3">
        <div className="col border p-3">Footer</div>{" "}
          <div className="col border p-3">Total Price</div>
          <div className="col border p-3"></div>
          <div className="col border p-3"></div>
        </div>
        </div>
    </div>
  );
}

export default App
