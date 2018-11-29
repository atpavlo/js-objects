/*писати код тут*/

// var test = ['word1', 'word2', 'word3', 'word4'];

var product = {
    name: 'Asus T100',
    price: 9754,
    image: 'img/bbf-dream-boy.png',
    discount_price: 8755,
    is_available: true,
    show: function () {
        alert('Name: ' + this.name+"\n "+'Price: ' + this.price);
    }
};

// console.log(product['name']);
// console.log(test[0]);
// product.show();

var containerElem = document.getElementById("catalogue");
// <div class="catalogue">

// var productImage = document.createElement('img');
// <img >

// productImage.setAttribute('src', product.image);
// <img src="img/asus_big.jpg">

// productImage.setAttribute('class', 'test1');
// <img src="img/asus_big.jpg" class="test1">

// containerElem.appendChild(productImage);


var products = [
    {name: 'Ноутбук HP ProBook 450 G5 ', image: 'img/img1.png', price: 18899, isSuper: 0},
    {name: 'Ноутбук HP 255 G6', image: 'img/img2.png', price: 11999, isSuper: 1},
    {name: 'Ноутбук HP ProBook 430 G5 ', image: 'img/img3.png', price: 15299, isSuper: 1},
    {name: 'Ноутбук HP 250 G6', image: 'img/img1.png', price: 19999, isSuper: 0},
    {name: 'Ноутбук HP ProBook 450 G5', image: 'img/img2.png', price: 18999, isSuper: 0},
    {name: 'Ноутбук HP ProBook 440 G4 ', image: 'img/img2.png', price: 14499, isSuper: 0}
];

for (var i = 0; i < products.length; i++) {
    var product = products[i];
	var li = document.createElement('li');
	li.setAttribute = ('class', 'product-item');

    var productImage = document.createElement('img');    
    var productTitle = document.createElement('h5');
    var productPriceEl = document.createElement('div');    
    productPriceEl.setAttribute('class', 'price');
    productImage.setAttribute('src', product.image);
    
    productTitle.innerHTML = product.name;
    productPriceEl.innerHTML = "<strong>Ціна: </strong>" + product.price;



    containerElem.appendChild(li);
    li.appendChild(productImage);
    li.appendChild(productTitle);
    li.appendChild(productPriceEl);

    if (product.isSuper === 1) {
    	console.log(product.isSuper);
        productImage.setAttribute('id', "superImage");
        // productPriceEl.appendChild

        var badgeEl = document.createElement('span');
		badgeEl.setAttribute('class', 'badge badge-warning');
		badgeEl.innerHTML = "Супер ціна";
        li.appendChild(badgeEl);

    }
}