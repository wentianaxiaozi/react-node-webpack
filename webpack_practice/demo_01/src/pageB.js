document.querySelector('#root').appendChild(hello())


function hello() {
    let hello = document.createElement('h1');
    hello.innerHTML = "hello pageB!";
    return hello;
}