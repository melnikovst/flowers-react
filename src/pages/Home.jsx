import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';
const Home = () => {
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filterSlice
  );
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useContext(SearchContext);

  const handleCategoryClick = (index) => {
    dispatch(setCategoryId(index));
  };

  console.log(currentPage);

  const getData = async () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    try {
      const res = await axios.get(
        categoryId === 0
          ? `https://631dacdccc652771a4896170.mockapi.io/cards?search=${search}&page=${currentPage}&limit=4&sortBy=${sort.sortType}&order=asc`
          : `https://631dacdccc652771a4896170.mockapi.io/cards?search=${search}&page=${currentPage}&limit=4&category=${categoryId}&sortBy=${sort.sortType}&order=asc`
      );
      setCards(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangePage = (pageNum) => {
    dispatch(setCurrentPage(pageNum));
  };

  const [selectedCard, setSelectedCard] = useState({});
  const onImgClick = (card) => {
    setIsPopupOpen(true);
    setSelectedCard(card);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    getData();
  }, [categoryId, sort, currentPage, search]);

  const [checkType, setCheckType] = useState(0);

  return (
    <div className="container">
      <div className="content__top">
        <Categories handler={handleCategoryClick} isActive={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все цветы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
          : cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  {...card}
                  onImgClick={onImgClick}
                  card={card}
                  setCheckType={setCheckType}
                />
              );
            })}
      </div>
      <Pagination onChangePage={onChangePage} />
      {isPopupOpen && (
        <div
          className={`container__substrate ${
            isPopupOpen ? 'container__substrate_active' : ''
          }`}
          onClick={() => {
            setIsPopupOpen(false);
            setSelectedCard({});
          }}
        >
          <img
            src={
              checkType === 0 ? selectedCard.ImageUrl : selectedCard.DarkImage
            }
            alt={selectedCard.name}
            className="container__popupImg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
