import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/img/logo.png';
import notFound from '../../assets/img/nopic.png';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import SearchItem from '../SearchItem';
import { searchActions } from '../../redux/actions';

const Header = () => {
  const dispatch = useDispatch();

  const { totalCount, totalPrice } = useSelector(({ cart }) => cart);
  const searchProduct = useSelector(({ search }) => search.searchProduct);

  const [activeSearch, setActiveSearch] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState(false);
  const [inputTextSearch, setInputTextSearch] = React.useState({
    text: '',
  });

  const toggleSearchInput = () => {
    setActiveSearch(!activeSearch);
  };

  // закрытие при клике вне
  const sortRef = React.useRef();
  const hundleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setActiveSearch(false);
    }
  };

  React.useEffect(() => {
    document.querySelector('body').addEventListener('mouseout', hundleOutsideClick);
  }, []);

  // при каждом изменении в input
  const onChangeResult = (e) => {
    setInputTextSearch({
      text: e.target.value,
    });
    if (e.target.value.length > 2) {
      dispatch(searchActions.loadSearch(e.target.value));
      setSearchResult(true);
    } else {
      setSearchResult(false);
    }
  };

  return (
    <header ref={sortRef} className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        {!activeSearch && (
          <div className="header__info">
            <Link to="/contacts">
              <div className="header__phone">
                <span>Контакты</span>
              </div>
            </Link>
            <Link to="/contacts">
              <div>
                <span>Доставка</span>
              </div>
            </Link>
          </div>
        )}

        <div
          className={classnames('header__search', {
            header__search_active: activeSearch === true,
          })}
          ref={sortRef}>
          {activeSearch ? (
            <input
              onChange={onChangeResult}
              className="header__input"
              type="search"
              placeholder="Поиск"
              autoFocus
              value={inputTextSearch.text}
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleSearchInput}
              className="header__faSearch"
              icon={faSearch}
            />
          )}
          {searchResult && activeSearch && (
            <div className="header__result">
              <div className="header__background">
                <ul className="header__list">
                  {searchProduct.length !== 0 ? (
                    searchProduct.map((item) => {
                      return <SearchItem key={item.id} {...item} />;
                    })
                  ) : (
                    <li className="header__li">
                      <img src={notFound} alt="img" width="52px" />
                      Нет результатов
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="header__cart">
          <div>
            <Button className="button--cart">
              <span>{totalPrice ? totalPrice : '0'} ₽</span>
              <div className="button__delimiter"></div>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>{totalCount ? totalCount : '0'}</span>
            </Button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
