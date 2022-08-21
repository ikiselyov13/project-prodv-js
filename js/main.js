const products = [
    { title: 'beige-trouses', price: 100, img: 'img/beige-trouses.jpg' },
    { title: 'blue-jacket', price: 200, img: 'img/blue-jacket.jpg' },
    { title: 'grey-cap', price: 300, img: 'img/grey-cap.jpg' },
    { title: 'grey-hat', price: 400, img: 'img/grey-hat.jpg' },
    { title: 'hoodie', price: 500, img: 'img/hoodie.jpg' },
    { title: 'leather-jacket', price: 600, img: "img/leather-jacket.jpg" },
    { title: 'white-shirt', price: 700, img: 'img/white-shirt.jpg' },
    { title: 'white-shoes', price: 800, img: 'img/white-shoes.jpg' },
    { title: 'white-t-shirt', price: 900, img: 'img/white-t-shirt.jpg' },
];

const renderProduct = (obj) => {
    return `<div class="products__item">
                <img src="${obj.img}" alt="${obj.title}">
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    document.querySelector('.products__list').innerHTML = productsList;
};

renderPage(products);