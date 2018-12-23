// Script

initial();

function refreshShopperList() {
  var shopperListDiv = document.getElementById("shopper-list");
  //   var shopperListTotalDiv = document.getElementById("shopper-list-total");
  shopperListDiv.innerHTML =
    '<div class="OrderMenu">메뉴</div><div class="OrderNumber">수량</div><div class="OrderPrice">금액</div>';

  for (var dish of shopperList) {
    var listItem = document.createElement("div");
    shopperListDiv.appendChild(listItem);
    var nameDiv = document.createElement("div");
    var amountDiv = document.createElement("div");
    var priceDiv = document.createElement("div");
    shopperListDiv.appendChild(nameDiv);
    shopperListDiv.appendChild(amountDiv);
    shopperListDiv.appendChild(priceDiv);

    nameDiv.innerText = dish.name;
    amountDiv.innerText = dish.amount;
    priceDiv.innerText = String(dish.price * dish.amount) + "원";

    nameDiv.className = "OrderMenu";
    amountDiv.className = "OrderNumber";
    priceDiv.className = "OrderPrice";
  }

  var total = shopperList.reduce(function(total, item) {
    return total + item.amount * item.price;
  }, 0);
  shopperListDiv.innerHTML =
    shopperListDiv.innerHTML +
    '<div id="shopper-list-total"><div>합계</div><div>' +
    total +
    " 원</div></div>";
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

  // shopperList.push(dish);
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
    price.innerText = dish.price;

    holder.onclick = function() {
      addShopperList(dish);
    };
  }
}
