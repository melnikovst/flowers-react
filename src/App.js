import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Card price={500} title="Мексиканская" />
            <Card price={350} title="Пеперонни" />
            <Card price={480} title="Итальянская" />
            <Card price={620} title="Четыре сыра" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
