//Realizar un juego de 3 en raya, que tenga en cuenta el turno del jugador, 
//que los 3 primeros turnos de cada jugador está colocando fichas y luego serán movimientos (primer click coger ficha, segundo click colocar ficha), 
//las fichas serán imágenes a vuestro gusto, el programa no implementará las reglas de posicionamiento, pero sí evaluará cuando hay una victoria,
// y en ese momento mostrará el tiempo invertido en total por cada jugador entre todos sus turnos


let turn = true;

const boxList = document.querySelectorAll('.table .box')
boxList.forEach(function(box, index){
    box.textContent = index
    box.addEventListener('click', function(){
        if(turn){
            box.style.setProperty('background-image' , 'url(img/circulo.png')
        }else{
            box.style.setProperty('background-image' , 'url(img/cruz.png')
        }
        turn = !turn;
    })
})
function DisplayTurn(){

}

function timeInverted(){

}

function restart(){

    window.location.reload(false);
}

function victory(){
    if(table[0] == table[1] && table[0] == table[2] && table[0]){
        return true;
    }else if
        (table[3] == table[4] && table[3] == table[5] && table[3]){
            return true;
    }else if
        (  table[6] == table[7] && table[6] == table[8] && table[6]){
        return true;
    }else if
        (table[0] == table[3] && table[0] == table[6] && table[0]){
        return true;
    }else if
        (table[1] == table[4] && table[1] == table[7] && table[1]){
        return true;
    }else if
        (table[2] == table[5] && table[2] == table[8] && table[2]){
        return true;
    }else if
        (table[0] == table[4] && table[0] == table[8] && table[0]){
        return true;
    }else if
        (table[2] == table[4] && table[2] == table[6] && table[2]){
        return true;
    }
    return false;
 
}

window.onload= ShowTable();