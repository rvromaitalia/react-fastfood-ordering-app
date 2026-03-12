import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <>
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col border p-3"> Header/ Theme Toggle</div>
          <div className="col border p-3"></div>
          <div className="col border p-3"></div>
        </div>
        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col border p-3">Burger Card</div>
          <div className="col border p-3">Pizza Card</div>
          <div className="col border p-3">Fries Card</div>
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
      </>
    </div>
  );
}

export default App
