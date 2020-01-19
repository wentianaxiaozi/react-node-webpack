// function add(x: number, y: number):number {
//     return x+y
// }
// let res = add(10, 20)
// console.log(res);
// let myAdd = function(x: number, y: number): number {
//     return x + y
// }
// console.log(myAdd(1,2));
// var myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
//     return x + y
// }
// let res = myAdd(10, 10)
// console.log(res);
//函数的可选参数
// function buildName(fileName: string, lastName?: string) {
//     if(lastName) {
//         return fileName + '------' + lastName
//     }else {
//         return fileName
//     }
// }
// let result1 = buildName('初见', '科技')
// console.log(result1);
//函数参数的默认值
// function buildName(firstName: string, lastName = "smith") {
//     return firstName + '------------' + lastName
// }
// let res = buildName('初见科技')
// console.log(res);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(50),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickdedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(Math.random() * 13);
            return { suit: _this.suits[pickdedCard], card: pickdedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
