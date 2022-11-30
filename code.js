
// Función que permite cerrar el menú de instrucciones.
function close(){
    document.getElementById("Instructions").style.visibility = "hidden";
}
let turn = 0;

const btnPulsado = (e) =>{
    turn++;
    const btn = e.target;
    btn.style.backgroundColor = turn %2 ? 'blue' : 'red'; 
}

document.querySelectorAll('button').forEach(
    obj => obj.addEventListener('click', btnPulsado));

