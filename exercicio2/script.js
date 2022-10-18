//Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNumerica = [1,9,55,19,40]
const arrayStrings = ["Lucas", "Renata", "Haroldo", "Mafalda"]
const arrayMista = ["Iphone", 13, 25>=27]
console.log(arrayNumerica, arrayStrings, arrayMista)

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)
console.log ("Array Numerica tem: ", arrayNumerica.length)
console.log ("Array Strings tem: ", arrayStrings.length)
console.log ("Array Mista tem: ", arrayMista.length)

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
// A contagem sempre começa em 0
console.log("Primeiro item daqui é: ", arrayNumerica[0])
console.log("O segundo item daqui é: ", arrayStrings [1])
console.log("O terceiro item daqui é: ", arrayMista[2])

//um `includes()` verdadeiro, e outro falso
console.log("Aqui possui o número 55?", arrayNumerica.includes(55))
console.log("Aqui possui uma string 13?" ,arrayMista.includes("13"))
