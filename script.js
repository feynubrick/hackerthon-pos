// Script

initial();

function refreshShopperList() {
  var shopperListDiv = document.getElementById("shopper-list");
  shopperListDiv.innerHTML = "";
  var shopperListTotalDiv = document.getElementById("shopper-list-total-item");
  for (var dish of shopperList) {
    var listItem = document.createElement("div");
    listItem.className = "shopper-list-item";
    shopperListDiv.appendChild(listItem);
    var nameDiv = document.createElement("div");
    var amountDiv = document.createElement("div");
    var priceDiv = document.createElement("div");
    listItem.appendChild(nameDiv);
    listItem.appendChild(amountDiv);
    listItem.appendChild(priceDiv);

    nameDiv.innerText = dish.name;
    amountDiv.innerText = dish.amount;
    priceDiv.innerText = String(dish.price * dish.amount) + "원";
  }

  var total = shopperList.reduce(function(total, item) {
    return total + item.amount * item.price;
  }, 0);
  shopperListTotalDiv.innerText = total + " 원";
}

function addShopperList(dish) {
  var index = -1;
  for (var i = 0; i < shopperList.length; i++) {
    let item = shopperList[i];
    if (dish.name === item.name) {
      index = i;
    }
  }

  if (index === -1) {
    dish.amount = 1;
    shopperList.push(dish);
  } else {
    shopperList[index].amount++;
  }

  refreshShopperList();
}

function initial() {
  var menuList = document.getElementById("menu-list");

  for (let i = 0; i < DATA.length; i++) {
    let dish = DATA[i];

    let holder = document.createElement("div");
    let menu = document.createElement("div");
    let price = document.createElement("div");

    menuList.appendChild(holder);
    holder.appendChild(menu);
    holder.appendChild(price);

    holder.className = "menubox";

    menu.innerText = dish.name;
    price.innerText = dish.price + " 원";

    holder.onclick = function() {
      addShopperList(dish);
    };
  }
}
