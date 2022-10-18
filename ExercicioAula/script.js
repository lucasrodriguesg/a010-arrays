//Crie um novo array. Ele deve possuir apenas números
const arrayNumeros = [1,5,7,3,9,60]

//crie uma cópia deste array utilizando o método slice().
const novaArray = arrayNumeros.slice()

//Remova o último item do primeiro array, e em seguida, adicione o número 6.
arrayNumeros.pop()
arrayNumeros.push(6)

//emova o número que está no índice 2 do segundo array
novaArray.splice(2,1)

//imprima os dois arrays.
console.log(arrayNumeros)
console.log(novaArray)


