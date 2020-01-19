// let age:number = 123

// function warnUser() {
//     console.log('this is my warning message')
// }
// warnUser()

// function f([first, second]: [number, number]) {
//     console.log(first)
//     console.log(second)
// }
// f([1,2])

// let [first, ...rest] = [1,2,3,4,5,6]
// console.log(first)
// console.log(rest)

//对象解构
// let obj = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// }

// let {a, b} = obj

interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj);
}

let myObj = {size: 10, label: 'nidaye'}
printLabel(myObj)