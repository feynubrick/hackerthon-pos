// Script

initial();

function refreshShopperList() {
    var shopperListDiv = document.getElementById('shopper-list');

    for (var dish of shopperList) {
        var listItem = document.createElement('div');
        shopperListDiv.appendChild(listItem);
        var nameDiv = document.createElement('div');
        var amountDiv = document.createElement('div');
        var priceDiv = document.createElement('div');
        shopperListDiv.appendChild(nameDiv);
        shopperListDiv.appendChild(amountDiv);
        shopperListDiv.appendChild(priceDiv);

        nameDiv.innerText = dish.name;
        amountDiv.innerText = dish.amount;
        priceDiv.innerText = String(dish.price * dish.amount) + '원';
    }
}

function addShopperList(dish) {
    dish.amount++;
    shopperList.push(dish);
    refreshShopperList();
}

function initial() {
    var menuList = document.getElementById("menu-list");
    
    for (let i = 0; i < DATA.length; i++) {
        let dish = DATA[i];

        var holder = document.createElement('div');
        var menu = document.createElement("div");
        var price = document.createElement("div");

        menuList.appendChild(holder);
        holder.appendChild(menu);
        holder.appendChild(price);

        holder.className = "menubox";
        
        menu.innerText = dish.name;
        price.innerText = dish.price;

        holder.onclick = function () { addShopperList(dish) };
    }
}