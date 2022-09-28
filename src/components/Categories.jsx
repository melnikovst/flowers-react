const Categories = ({ isActive, handler }) => {
  const categories = [
    'Все',
    'Популярные',
    'Летние',
    'Пышные',
    'Необычные',
    'Сборные',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={isActive === i ? 'active' : ''}
              onClick={() => handler(i)}
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
