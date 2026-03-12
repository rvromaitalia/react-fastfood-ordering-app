import { useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import OrderSummary from "./components/OrderSummary";
import menu from "./data/menu";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );

      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              }
            : orderItem
        );
      }

      return [
        ...prevOrder,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <div className="container py-4">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <MenuList items={menu} onAddToOrder={addToOrder} />

        <OrderSummary
          order={order}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>
    </div>
  );
}

export default App;