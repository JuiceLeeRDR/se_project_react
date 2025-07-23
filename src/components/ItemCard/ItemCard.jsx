import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import likeBtn from "../../assets/likebtn.svg";
import likedBtn from "../../assets/likedbtn.svg";

function ItemCard({ item, onSelectCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const handleItemCardClick = () => {
    onSelectCard(item);
  };

  // const isOwn = item.owner === currentUser._id;

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const handleLike = () => {
    console.log("Like button clicked, isLiked:", isLiked);
    onCardLike({ id: item._id, isLiked });
  };
  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = isLiked
    ? "item-card__liked-icon"
    : "item__likebtn";

  return (
    <li className="item-card">
      <div className="item-card__info-container">
        <h2 className="item-card__text">{item.name}</h2>
        {isLoggedIn && (
          <button className="item__likebtn" type="button" onClick={handleLike}>
            <img
              src={likeBtn}
              alt="like button"
              className={itemLikeButtonClassName}
            />
          </button>
        )}
      </div>
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
