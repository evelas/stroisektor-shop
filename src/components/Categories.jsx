import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
import { Panels } from '../assets/svg';
SwiperCore.use([Navigation, Scrollbar]);

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  console.log("render categories");
  
  return (
    <div className="categories">
      <div className="categories__ul">
        <div
          onClick={() => onClickCategory(null)}
          className={classNames('categories__item', 'categories__item--all', {
            active: activeCategory === null,
          })}>
          <div className="categories__img">
            <Panels />
          </div>
          <p>Все категории</p>
        </div>

        <Swiper
          navigation
          spaceBetween={10}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1090: {
              slidesPerView: 4,
            },
            1380: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
          }}>
          {items.map((item, index) => (
            <SwiperSlide
              key={`${item.name}_${index}`}
              className={classNames('categories__item', {
                active: activeCategory === item.name,
              })}
              onClick={() => onClickCategory(item.name)}>
              <div className="categories__img">{item.img}</div>
              <p>{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
})

Categories.propTypes = {
  activeCategory: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null
};

export default Categories;
