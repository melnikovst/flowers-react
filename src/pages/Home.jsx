import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [sort, setSort] = useState({
    name: 'цене',
    sortType: 'price',
  });

  const handleCategoryClick = (index) => {
    setActive(index);
  };

  const getData = async () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    try {
      const res = await fetch(
        active === 0
          ? `https://631dacdccc652771a4896170.mockapi.io/cards?sortBy=${sort.sortType}&order=asc`
          : `https://631dacdccc652771a4896170.mockapi.io/cards?category=${active}&sortBy=${sort.sortType}&order=asc`
      );
      const cards = await res.json();
      setCards(cards);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleActiveClass = (index) => {
    setSort(index);
  };

  console.log(active);

  useEffect(() => {
    getData();
  }, [active, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories handler={handleCategoryClick} isActive={active} />
        <Sort sort={sort} handleActiveClass={handleActiveClass} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
          : cards.map((cards) => {
              return <Card key={cards.id} {...cards} />;
            })}
      </div>
    </div>
  );
};

export default Home;
