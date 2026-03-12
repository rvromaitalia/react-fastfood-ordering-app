
const FoodCard = ({ id, title, description, price, onAddToOrder }) => {
    const handleAddClick = () => {
    onAddToOrder({
      id,
      title,
      description,
      price,
    });
  };
    return (
        <div className = "card h-100 p-3 shadow-sm">
            <div className="card-body d-flex flex-column">
                <h3 className="card-tittle">{title}</h3>
                <p className="card-text">{description}</p>
                <p className="fw-bold" mt-auto mb-3>SEK {price}</p>
                <button className="btn btn-primary" onClick={handleAddClick}>
                    Add to Order
                </button>
            </div>
        </div>
    );
};

export default FoodCard;