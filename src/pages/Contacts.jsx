import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

function Contacts() {
  return (
    <div className="content">
      <div className="container">
        <div className="contacts">
          <h2>Контакты</h2>
          <p>
            <b>Адрес: </b>
            194213, Санкт-Петербург набережная обводного канала, дом 21
          </p>
          <div className="contacts__map">
            <YMaps>
              <Map
                width="100%"
                height="450px"
                defaultState={{
                  center: [55.684758, 37.738521],
                  zoom: 12,
                }}>
                <Placemark geometry={[55.684758, 37.738521]} />
              </Map>
            </YMaps>
          </div>
          <div className="contacts__info">
            <p>
              <b>Телефон: </b>
              +7 (812) 702-56-66
            </p>
            <p>
              <b>Email: </b>
              <a href="mailto: buhvin@mail.ru">buhvin@mail.ru</a>
            </p>
            <p>
              <b>Режим работы: </b>
              Понедельник — пятница 9-00 до 18-00 (без перерыва)
            </p>
            <p>
              <b>Социальные сети: </b> <br />
            </p>
            <div className="contacts__social">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVk} size="2x" />
              </a>
            </div>
            <p>
              * Заказы, отправленные в нерабочее время, обрабатываются на следующий рабочий день.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
