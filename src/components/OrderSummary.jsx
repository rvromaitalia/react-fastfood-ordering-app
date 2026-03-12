import OrderItem from "./OrderItem";

function OrderSummary({ order, onIncrease, onDecrease }) {
  const totalPrice = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section className="card p-4 shadow-sm">
      <h3 className="mb-3">Your Order</h3>

      {order.length === 0 ? (
        <p className="mb-0">No items added yet.</p>
      ) : (
        <>
          {order.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}

          <hr />

          <h4 className="text-end">
            Total: SEK {totalPrice.toFixed(2)}
          </h4>
        </>
      )}
    </section>
  );
}

export default OrderSummary;