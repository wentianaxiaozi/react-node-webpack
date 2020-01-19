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
var EDirective;
(function (EDirective) {
    EDirective[EDirective["Walk"] = 1] = "Walk";
    EDirective[EDirective["Jump"] = 2] = "Jump";
    EDirective[EDirective["Smile"] = 3] = "Smile";
})(EDirective || (EDirective = {}));
var DirectiveManager = /** @class */ (function () {
    function DirectiveManager() {
        var _this = this;
        this.directive = [];
        this.add = function (directive) {
            _this.directive = _this.directive.concat(directive);
            return _this.directive;
        };
        this.get = function (index) {
            return _this.directive[index];
        };
        this.shift = function () {
            _this.directive = _this.directive.slice(1);
            return _this.directive;
        };
    }
    return DirectiveManager;
}());
var result = new DirectiveManager();
// let add = result.add(EDirective.Walk)
var get = result.get(1);
console.log(get);
