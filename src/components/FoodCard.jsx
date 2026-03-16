function FoodCard({ id, title, description, price, image, onAddToOrder }) {
  const handleAddClick = () => {
    onAddToOrder({
      id,
      title,
      description,
      price,
      image
    });
  };

  return (
    <div className="card h-100 p-3 shadow-sm">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
            width: "100%"
          }}
        />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{title}</h3>

        <p className="card-text">{description}</p>

        <p className="fw-bold mt-auto mb-3">
          SEK {price.toFixed(2)}
        </p>

        <button className="btn btn-primary" onClick={handleAddClick}>
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default FoodCard;