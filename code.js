
// Función que permite cerrar el menú de instrucciones.
function close(){
    document.getElementById("Instructions").style.visibility = "hidden";
}

document.querySelector('button').forEach(
    obj => obj.addEventListener("click", btnPulsado));

const btnPulsado = (e) =>{
    const btn = e.target;
    btn.stye.backgroundColor = turno %2 ? 'blue' : 'red'; 
}