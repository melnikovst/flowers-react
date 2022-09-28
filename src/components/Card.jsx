import { useState } from 'react';

const Card = ({
  price,
  name,
  ImageUrl,
  sizes,
  types,
  DarkImage,
  onImgClick,
  card,
  setCheckType,
}) => {
  const itemTypes = ['светлый', 'тёмный'];

  const [pizzaCount, setPizzaCount] = useState(0);
  const [sizesState, setSizesState] = useState(0);
  const [typesState, setTypesState] = useState(0);

  const handlePizzaCount = () => {
    setPizzaCount(pizzaCount + 1);
  };
  return (
    <div className="flowers-card">
      <img
        className="flowers-card__image"
        src={typesState === 0 ? ImageUrl : DarkImage}
        alt={name}
        onClick={() => onImgClick(card)}
      />
      <h4 className="flowers-card__title">{name}</h4>
      <div className="flowers-card__selector">
        <ul>
          {types.map((item, i) => {
            return (
              <li
                className={typesState === i ? 'active' : ''}
                onClick={() => {
                  console.log('item ' + item);
                  setCheckType(item);
                  setTypesState(item);
                }}
                key={i}
              >
                {itemTypes[item]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((item, i) => {
            return (
              <li
                className={sizesState === i ? 'active' : ''}
                onClick={() => setSizesState(i)}
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flowers-card__bottom">
        <div className="flowers-card__price">от {price}р</div>
        <button
          className="button button--outline button--add"
          onClick={handlePizzaCount}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
};

export default Card;
