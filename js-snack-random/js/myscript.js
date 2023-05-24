//Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

function getRandomUniqueNumber( minNum, maxNum, elements ){

   const numberList = []

if ((maxNum - minNum) < elements) {
   
  return []

}

while (numberList.length < elements){
    const newRandomNumber = getRandomInt(minNum, maxNum)

    if(!numberList.includes(newRandomNumber)){
        numberList.push(newRandomNumber)
    }
}


return numberList




}

function getRandomInt(minimumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minimumNumber +1) + minimumNumber)

    return randomNumber
}

console.log(getRandomUniqueNumber(1,5,3))