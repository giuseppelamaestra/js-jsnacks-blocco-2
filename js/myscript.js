
let sum = 0

for(let i = 1; i < 11; i = i + 1){
    sum = sum + i

    
}

console.log(sum, sum / 10)



//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let Word1 = prompt("type one word")

let Word2 = prompt("type another word") 


function WordLenght(parola1, parola2) {
    
   if(Word1 > Word2){
      return false
   } else if(Word1 < Word2) {
     return false
   } {
    return true
   }

} 

console.log(WordLenght(Word1.value, Word2.value)) 


if(WordLenght(Word1.value, Word2.value)) {

    console.log("le parole sono uguali")
    
} else if(WordLenght(Word1.value < Word2.value)) {
    console.log("le parole non sono uguali")
} else {
    console.log("le parole non sono uguali")
}


/**
 * 
 */