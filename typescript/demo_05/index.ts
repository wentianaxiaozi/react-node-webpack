// function identity(arg: any):any {
//     return arg
// }

// let result = identity(10)
// console.log(result);


//泛型

// function loggingIdentity<T>(arg: T):T {
//     return arg
// }

// let result = loggingIdentity(20)
// console.log(result);

// function loggingIdentity<T>(arg:T[]):T[] {
//     return arg
// }

// let result = loggingIdentity([1,2,3,4])
// console.log(result);

// function identities<T,U>(arg1: T, arg2: U):[T,U] {
//     return [arg1, arg2]
// }

// let result = identities('chujian', 'beijing')
// console.log(result);

enum EDirective {
    Walk = 1,
    Jump = 2,
    Smile = 3
}
class DirectiveManager<T> {
    private directive: Array<T> = [];
    add = (directive: T):Array<T> => {
        this.directive = this.directive.concat(directive)
        return this.directive
    }
    get = (index: number): T => {
        return this.directive[index]
    }
    shift = ():Array<T> => {
        this.directive = this.directive.slice(1)
        return this.directive
    }
}

let result = new DirectiveManager<number>()
// let add = result.add(EDirective.Walk)
let get = result.get(1)
console.log(get);
