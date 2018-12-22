var DATA = [new Dish('치즈라면', 4500), new Dish('김밥', 2000), new Dish('쫄면', 5000), new Dish('잔치국수', 5000), new Dish('우동', 5000), new Dish('돈까스', 7000)];
var shooperList = [];

function Dish(name, price, picture, amount) {
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.amount = 0;
}