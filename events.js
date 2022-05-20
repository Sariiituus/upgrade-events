//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
/* function addListeners () {
    const element = document.querySelector("#btnToClick")
    element.addEventListener('click', function(event) {
        console.log(event);
    });
 } */

const handleClick = function(event) {
    console.log(event);
}

document.getElementById("btnToClick").addEventListener("click", handleClick);
 


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const handleFocus = function(ev) {
    let texto = ev.target.value;
    console.log(texto);
}

document.querySelector(".focus").addEventListener("focus", handleFocus);



//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const handleInput = function(event) {
    let texto = event.target.value;
    console.log(texto);
}

document.querySelector(".value").addEventListener("input", handleInput);