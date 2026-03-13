function OrderItem({ item, onIncrease, onDecrease }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 className="mb-1">{item.title}</h5>

        <p className="mb-0">
          SEK {item.price.toFixed(2)} x {item.quantity}
        </p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onDecrease(item.id)}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default OrderItem;