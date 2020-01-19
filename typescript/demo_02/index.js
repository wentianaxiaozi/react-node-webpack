function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    return newSquare;
}
var res = createSquare({ color: "black" });
console.log(res);
