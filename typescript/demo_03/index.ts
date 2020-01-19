class Greeting {
    greeting: string;
    constructor(mes: string) {
        this.greeting = mes
    }
    greet() {
        return "hello"+ this.greeting
    }
}

let greeter = new Greeting('world')
console.log(greeter.greet());
