import "./ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  const handleItemCardClick = () => {
    onSelectCard(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__text">{item.name}</h2>
      <img
        onClick={handleItemCardClick}
        className="item-card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
