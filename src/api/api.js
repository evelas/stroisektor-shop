import Axios from "axios";

const instansAxios = Axios.create({
    baseURL: 'http://stroisektor.ru/REST/',
    //baseURL: 'http://localhost:8080/',
});

export const productsAPI = {
    getGoods(category, sortBy, limit) {
        console.log(`category?${category !== null ? `category=${category}` : ''}&sort=${sortBy.type}&order=${sortBy.order}&limit=${limit}`)
        return instansAxios.get(`category?${category !== null ? `category=${category}` : ''}&sort=${sortBy.type}&order=${sortBy.order}&limit=${limit}`)
        //return instansAxios.get(`items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}&_page=1&_limit=${limit}`)
    },
    getSearch(name) {
        return instansAxios.get(`search?name=${name}`)
        // return instansAxios.get(`items?q=${name}`);
    },
    getProduct(id) {
        return instansAxios.get(`product/${id}`)
    }
}
// TODO: страница Доставка

// TODO: переделать запрос в базе с page и limit, так как без page идет перерисовка всех товаров вместо добавлениях новых

// TODO: сделать форму отправки post с записью заказа в новую базу "заказы" и отправлять уведомление на почту
// в форме указать способ доставки товара, способ оплаты 
// далее выдавать куку на год, чтобы в ней хранились заказы пользователя, которые не регистрировался,
// но чтобы хранить его заказы на сайте, записываем в куку