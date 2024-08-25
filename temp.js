let htElement = document.getElementById('check');

console.log(htElement)

let h1Data = htElement.innerHTML;

let btnElement = document.getElementById('hello2')

btnElement.addEventListener('click',printHelloWorld)

function printHelloWorld(){
    alert(h1Data)
}