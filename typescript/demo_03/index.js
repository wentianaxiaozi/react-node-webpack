var Greeting = /** @class */ (function () {
    function Greeting(mes) {
        this.greeting = mes;
    }
    Greeting.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    return Greeting;
}());
var greeter = new Greeting('world');
console.log(greeter.greet());
