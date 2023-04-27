const productsBtn = document.querySelectorAll('.product_btn');
const cartProductsList = document.querySelector('.cart-items-container');
const cart = document.querySelector('.fa-shopping-cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printQuantity = () => {
    let length = cartProductsList.querySelector('.current_cart').children.length;
    cartQuantity.textContent = length;
    length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const printFullPrice = () => {
    fullPrice.textContent = `  $ ${normalPrice(price)}`;
};

const async_func = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('is');
        },530)
    });
}

const async_func2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('and I love 2 code');
        },500)
    });
}

const main = async () => {
    console.log('hi')
    console.log('my name')
    const result = await async_func();
    console.log(result);
    console.log('jeff!')
    const result2 = await async_func2();
    console.log(result2)
}



const deleteProducts = (productParent)=> {
    //let id = productParent.querySelector(".cart-item").dataset.id;
    //document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    printQuantity();
    productParent.remove();
    printQuantity();
};

const generateCartProduct = (png, title, price, id) => {
    return `
        <li class="cart-item"  data-id="${id}">
        
            <span class="fas fa-times"></span>
            <img src = '${png}'  alt="" class = "product_images">
            <div class="content">
                <h3 class="product_title">${normalPrice(title)}</h3>
                <div class="price">${price}</div>
            </div>
        </li>
	`;
};

productsBtn.forEach(el=>{
    el.closest('.box').setAttribute('data-id',randomId());
    el.addEventListener('click',(e)=>{
      let self = e.currentTarget;
      let parent = self.closest('.box');
      let id = parent.dataset.id;
      let png = parent.querySelector('.images_product').getAttribute('src');
      let title = parent.querySelector('.product_title').textContent;
      let priceString = parent.querySelector('.price').textContent;
      let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price').textContent));
      console.log(priceNumber);



    plusFullPrice(priceNumber);

    //print full price
    printFullPrice();
    console.log(price);
    cartProductsList.querySelector('.current_cart').insertAdjacentHTML('afterbegin', generateCartProduct (png, title, priceNumber, id));
    //count and print quantity
    printQuantity();
    //disable
    self.disabled=true
 });
})

cartProductsList.addEventListener('click',(e)=>{
    if (e.target.closest('.fa-times')) {
    deleteProducts(e.target.closest('.cart-item'));
}
})

