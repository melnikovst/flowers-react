import { useState } from 'react';

const Categories = () => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const [active, setActive] = useState(0);

  const handleActive = (i) => {
    setActive(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={active === i ? 'active' : ''}
              onClick={() => handleActive(i)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
