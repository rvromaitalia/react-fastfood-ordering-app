import FoodCard from "./FoodCard";

function MenuList({ items, onAddToOrder }) {
  return (
    <section className="mb-5">
      <h2 className="text-center mb-4">Menu</h2>

      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <FoodCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              onAddToOrder={onAddToOrder}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuList;