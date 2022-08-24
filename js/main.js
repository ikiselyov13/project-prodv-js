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

class ProductList {
    constructor(container = '.products__list') {
        this.container = container;
        this.goods = [];
        this.sum = 0;
        this._fetchProducts(); //Рекомендация, чтобы метод был вызван в текущем классе.
        this.render(); //Вывод товаров на страницу.
        this.sumPrice();
        this.sumGoods = 0;

    }
    _fetchProducts() {
        /* В этом массиве уже есть id*/
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
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render();
            this.sum += product.price;
        }
        console.log(`${this.sum}`);
    }

    sumPrice() {
        for (let _product of this.goods) {
            this.sumGoods += _product.price;
        };
        console.log(`${this.sumGoods}`);
        console.log(`hello`);
    }

    /*sumPrice = function () {
        this.goods.forEach(function () {
            this.sum += this.goods.price;
        });
        console.log(`${this.sum}`);
    }*/
    
    /*sumPrice() {
        this.goods.forEach(function() {
            this.sum += this.goods.price;
        });
        console.log(`${this.sum}`);
    }*/
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="products__item">
                <img src="${this.img}" alt="${this.title}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
    }
}

let list = new ProductList();

sumPrice();

//Класс для Корзины товаров
class Cat {
    constructor() {
    }

    //Перейти к оформлению заказа
    goToorder() {
    }

    //Удалить все
    deleteAll() {
    }
}

//Класс для Элемента корзины товаров
class elemCat {
    constructor() {
    }

    //Удалить элемент
    deleteElem() {
    }

    //Добавить-вычесть элемент
    quantityElem() {}

    //Перейти к товару
    goToGood() {
    }

}


/*function sumPrice() {
    this.goods.forEach(function () {
        this.sum += this.goods.price;
    });
    console.log(`${this.sum}`);
}

let sum = function() {
    this.goods.forEach(function () {
        this.sum += this.goods.price;
    });
}

console.log(`${this.sum}`);*/

/*sumPrice() {
   return this.goods.forEach(function () {
        let price;
        price += this.goods.price;
        });
};*/


