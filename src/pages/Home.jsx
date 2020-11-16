import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Categories, ProductBlockLoaded } from '../components/';
import {
  Aqua,
  Cosmophen,
  Glue,
  MosquitoNet,
  Polynor,
  PolyurethaneFoam,
  SandwichPanels,
  Sealant,
  Tapes,
} from '../assets/svg/';
import SortPopup from '../components/SortPopup';
import ProductBlock from '../components/ProductBlock';

import { productActions } from '../redux/actions';
import { filterActions } from '../redux/actions';

const sortItems = [
  { name: 'популярности', type: 'rating', order: 'DESC', active: 'rating' },
  { name: 'Сначала дешевые', type: 'price', order: 'ASC', active: 'lowPrice' },
  { name: 'Сначала дорогие', type: 'price', order: 'DESC', active: 'highPrice' },
  { name: 'алфавит', type: 'name', order: 'ASC', active: 'name' },
];

const categories = [
  {
    id: 0,
    name: 'Утеплитель полиуретановый POLYNOR',
    img: <Polynor />,
  },
  {
    id: 1,
    name: 'Гидроизолирующие материалы «Акватрон»',
    img: <Aqua />,
  },
  {
    id: 2,
    name: 'Монтажная пена',
    img: <PolyurethaneFoam />,
  },
  {
    id: 3,
    name: 'Герметики',
    img: <Sealant />,
  },
  {
    id: 4,
    name: 'Строительный клей и жидкие гвозди',
    img: <Glue />,
  },
  {
    id: 5,
    name: 'Космофен (COSMOFEN)',
    img: <Cosmophen />,
  },
  {
    id: 6,
    name: 'Монтажные ленты',
    img: <Tapes />,
  },
  {
    id: 7,
    name: 'Сэндвич-панели и ПВХ листы',
    img: <SandwichPanels />,
  },
  {
    id: 8,
    name: 'Противомоскитные сетки',
    img: <MosquitoNet />,
  },
];

function Home() {
  const dispatch = useDispatch();
  // --- state ---
  const { products, isLoaded, lastItem, limit } = useSelector(({ products }) => products);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  // --- local state ---
  let [categoryName, setCategoryName] = React.useState('Все категории');
  React.useEffect(() => {
    dispatch(productActions.loadData(category, sortBy, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy, limit]);

  const onSelectCategory = React.useCallback((name) => {
    dispatch(filterActions.setCategory(name));
    if (name === null) {
      name = 'Все категории';
    }
    setCategoryName(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSort = React.useCallback((name) => {
    dispatch(filterActions.setSortBy(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onShowMore = (limit) => {
    dispatch(productActions.setNewLimit(limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className="content content_swiper">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            items={categories}
            onClickCategory={onSelectCategory}
          />
        </div>

        <div className="sort">
          <h2 className="content__title">{categoryName}</h2>
          <SortPopup activeSort={sortBy.active} items={sortItems} onClickSort={onSelectSort} />
        </div>

        <div className="content__items">
          {isLoaded
            ? products.map((item) => <ProductBlock key={item.id} {...item} />)
            : // : products.map((item) => <ProductBlockLoaded key={item.id}/>)
              Array(4)
                .fill(0)
                .map((_, index) => <ProductBlockLoaded key={index} />)}
        </div>

        <div className="show-more">
          {!lastItem && (
            <Button
              onClick={() => {
                onShowMore(limit + 4);
              }}
              className="button--show-more">
              Показать еще
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
