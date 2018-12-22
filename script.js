// Script
function refreshShopperList() {
    var shopperListDiv = document.getElementById('shopper-list');

    for (var dish of shooperList) {
        var listItem = document.createElement('div');
        shopperListDiv.appendChild(listItem);
        var nameSpan = document.createElement('span');
        var amountSpan = document.createElement('span');
        var priceSpan = document.createElement('span');
        shopperListDiv.appendChild(nameSpan);
        shopperListDiv.appendChild(amountSpan);
        shopperListDiv.appendChild(priceSpan);
        

        nameSpan.innerText(dish.name);
        amountSpan.innerText(dish.amount);
        priceSpan.innerText(String(dish.price * dish.amount) + '원');
    }
}

function addShopperList(dish) {
    dish.amount++;
    addShopperList.push(dish);
    refreshShopperList();
}