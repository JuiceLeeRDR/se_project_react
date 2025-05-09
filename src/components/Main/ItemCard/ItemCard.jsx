import "./ItemCard.css";

function ItemCard({ item, cardClick }) {
  const handleItemCardClick = () => {
    cardClick(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__text">{item.name}</h2>
      <img
        onClick={handleItemCardClick}
        className="item-card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
