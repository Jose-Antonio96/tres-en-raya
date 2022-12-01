
// Función que permite cerrar el menú de instrucciones.
function close(){
    document.getElementById("Instructions").style.visibility = "hidden";
}
let turn = 0;

const btnPulsado = (boton) =>{
    turn++;
    const button = boton.target;
    button.style.backgroundColor = turn %2 ? 'blue' : 'red'; 
}

document.querySelectorAll("button.btn").forEach(
    obj => obj.addEventListener('click', btnPulsado));


function restart(){
    window.location.reload(false);
}