let cardRotate = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hits = 0;
let tempo = false;
let timer = 30;
let initialTime = 30;

let timeBack = null;

let showMoves = document.getElementById('moves')
let showHits = document.getElementById('hits')
let ShowTime = document.getElementById ('timer')

//arreglo ordenado con numero aleatorios -0.5 para que existan numeros negativos
let myPleasures = ["🐱","🐱",'🎮','🎮','🍕','🍕','🚘','🚘','👚','👚','💖','💖','📚','📚','💻','💻']
myPleasures = myPleasures.sort(()=> {
    return Math.random() -0.5
})
console.log(myPleasures);


//funciones

function countdown(){
    timeBack = setInterval(()=>{
        timer--;
        ShowTime.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(timeBack);
            cardsBloqued();
        }
    },1000)
}

function cardsBloqued (){
    for (let i = 0; i<=15; i++){
        let cardsBloqued = document.getElementById(i)
        cardsBloqued.innerHTML = myPleasures[i];
        cardsBloqued.disabled = true;


    }
}

function rotate(id){

    if (tempo == false){
        countdown(); 
        tempo= true;
    }

    cardRotate++;
    console.log(cardRotate);

    if(cardRotate ==1){
        //mostrar el primer numero/imagen
        card1 = document.getElementById(id);
        firstResult = myPleasures[id]
        card1.innerHTML= firstResult;
        // se muestra el primer valor y se deshabilita el primer boton
        card1.disabled = true
    }else if (cardRotate == 2){
        card2 = document.getElementById(id);
        secondResult = myPleasures[id]
        card2.innerHTML= secondResult;
        card2.disabled = true
        
        moves++ //aumenta el contador una vez se entre en la segunda condicion
        showMoves.innerHTML=`Movimientos ${moves}`;

        if(firstResult == secondResult){
            cardRotate = 0; //contador de tarjetas a 0
            //si es igual, aumentar acierto
            hits++
            showHits.innerHTML=`Aciertos: ${hits}`;

            if(hits == 8){
                clearInterval(timeBack)
                showHits.innerHTML = `Aciertos: ${hits} 🤩`
                ShowTime.innerHTML = `🎉Genial! solo te demoraste ${initialTime - timer} segundos`
                showMoves.innerHTML = `Movimientos ${moves} 🤘😎`;
            }

        }else{
            //mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                cardRotate = 0
            },800);
        }

    }
}