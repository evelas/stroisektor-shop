import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function SortPopup({ activeSort, items, onClickSort }) {
  // открытие закрытие попапа
  const [visiablePopup, setVisiablePopup] = React.useState(false);
  const toggleVisiblePopup = () => {
    setVisiablePopup(!visiablePopup);
  };

  // закрытие попапа при клике вне попапа
  // useRef - аналог querySelector для React
  const sortRef = React.useRef();
  let hundleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiablePopup(false);
    }
  };
  React.useEffect(() => {
    document.querySelector('body').addEventListener('click', hundleOutsideClick);
  }, []);

  // смена активной сортировки

  let onChangeSort = (item) => {
    if (onClickSort) {
      onClickSort(item);
    }
    setVisiablePopup(false);
  };

  const activeNameSort = items.find((item) => item.active === activeSort).name;

  return (
    // ref={(ref) =>{sortRef.current = ref}}
    // более короткая запись ref={sortRef}
    // react js проверяет это функция? это объект? это null?
    // если в реф вернули объект, то я делаю внедрение в current ссылку,
    // если аноноимную функцию, то я вызываю эту анонимную функцию и потом туда прокидываю ссылку
    <div ref={sortRef} className="sort__content">
      <div className="sort__label" onClick={toggleVisiblePopup}>
        <svg
          className={visiablePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeNameSort}</span>
      </div>
      {visiablePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((item, index) => (
                <li
                  key={`${item.name}_${index}`}
                  onClick={() => onChangeSort(item)}
                  className={cn(null, {
                    active: activeSort === item.active,
                  })}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

SortPopup.propTypes = {
  activeSort: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSort: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
