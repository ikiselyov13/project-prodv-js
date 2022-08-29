// Урок 1

/* В этом массиве нет id
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

const renderProduct = obj => {
    return `<div class="products__item">
                <img src="${obj.img}" alt="${obj.title}">
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
};

const renderPage = list => {
    const productsList = (list.map(item => renderProduct(item))).join('');
    document.querySelector('.products__list').innerHTML = productsList;
};

renderPage(products);*/

// Урок 2

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products__list') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        //this.sum = 0;
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                    //console.log(data);
                this.render()
            });
        //this._fetchProducts();
        //this.render();

    }

    //getBasket
    //catalogData
    _getProducts() {
        
        return fetch(`${API}/catalogData.json`)
         .then(result => result.json())
         .catch(error => {
            console.log(error);
        });
    }
   /* _fetchProducts() {
        //В этом массиве уже есть id
        this.goods = [
            { id: 1, title: 'beige-trouses', price: 100, img: 'img/beige-trouses.jpg' },
            { id: 2, title: 'blue-jacket', price: 200, img: 'img/blue-jacket.jpg' },
            { id: 3, title: 'grey-cap', price: 300, img: 'img/grey-cap.jpg' },
            { id: 4, title: 'grey-hat', price: 400, img: 'img/grey-hat.jpg' },
            { id: 5, title: 'hoodie', price: 500, img: 'img/hoodie.jpg' },
            { id: 6, title: 'leather-jacket', price: 600, img: "img/leather-jacket.jpg" },
            { id: 7, title: 'white-shirt', price: 700, img: 'img/white-shirt.jpg' },
            { id: 8, title: 'white-shoes', price: 800, img: 'img/white-shoes.jpg' },
            { id: 9, title: 'white-t-shirt', price: 900, img: 'img/white-t-shirt.jpg' },
        ];
    }*/

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render();
            //this.sum += product.price;
        }
        //console.log(`${this.sum}`);
    }
}

class ProductItem {
    constructor(product) {
        this.product_name = product.product_name;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    //<img src="${this.img}" alt="${this.title}">
    render() {
        return `<div class="products__item">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
    }
}

let list = new ProductList();

//Урок 3

//Класс для Корзины товаров
class Basket {
    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this._getBasketItem()
            .then(data => { //data - объект js
                this.goods = data.contents;
                this.render()
            });
    }

    //getBasket
    //catalogData
    _getBasketItem() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ElemBasket(product);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    addGood() {

    }

    removeGood() {
    
    }

    changeGood() {

    }

    render() {

    }

    //Перейти к оформлению заказа
    goToOrder() {

    }

    //Удалить все
    deleteAll() {

    }
}

//Класс для Элемента корзины товаров
class ElemBasket {
    /*constructor(product) {
        this.title = product.product_name;
        this.id = product.id;
        this.price = product.price;
        this.quantity = product.quantity;
        this.img = product.img;
    }*/

    //Вернет верстку одного товара
    //<img src="${product.img}" alt="${product.product_name}">
    render(product) {
        return `<div class="basket__item">
                <h3>${product.product_name}</h3>
                <p>${product.price}</p>
                <p>${product.quantity}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
    }

    //Удалить элемент
    deleteElem() {
    }

    //Добавить-вычесть элемент
    quantityElem() {}

    //Перейти к товару
    goToProduct() {
    }

}

new Basket();





