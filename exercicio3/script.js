const arrayNumericaOriginal = [1,9,55,19,40]
const arrayStringsOriginal = ["Lucas", "Renata", "Haroldo", "Mafalda"]
const arrayMistaOriginal = ["Iphone", 13, 25>=27]

const arrayNumericaCopia = arrayNumericaOriginal.slice()
const arrayStringsCopia = arrayStringsOriginal.slice()
const arrayMistaCopia = arrayMistaOriginal.slice()
//A
arrayNumericaOriginal.push(94)
console.log("Esse é o original, adicionando 94: ",arrayNumericaOriginal)
console.log("Essa é a copia: ",arrayNumericaCopia)

//B
arrayStringsOriginal.pop()
console.log("Esse é o original retirando o ultimo item: ",arrayStringsOriginal)
console.log("Esse é a copia com o último item: ",arrayStringsCopia)

//C
arrayMistaOriginal.splice(1,1)
console.log("Esse é o original retirando 1 item: ",arrayMistaOriginal)
console.log("Essa é a copia sem modificação: ",arrayMistaCopia)