import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from '../components/Skeleton';

const Home = (props) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    window.scrollTo(0, 0);
    try {
      const res = await fetch(
        'https://631dacdccc652771a4896170.mockapi.io/cards'
      );
      const cards = await res.json();
      setCards(cards);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
