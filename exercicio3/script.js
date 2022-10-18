//Agora, vamos manipular os arrays, adicionando ou removendo informações
const arrayNumericaOriginal = [1,9,55,19,40]
const arrayStringsOriginal = ["Lucas", "Renata", "Haroldo", "Mafalda"]
const arrayMistaOriginal = ["Iphone", 13, 25>=27]

//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo
const arrayNumericaCopia = arrayNumericaOriginal.slice()
const arrayStringsCopia = arrayStringsOriginal.slice()
const arrayMistaCopia = arrayMistaOriginal.slice()

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumericaOriginal.push(94)
console.log("Esse é o original, adicionando 94: ",arrayNumericaOriginal)
console.log("Essa é a copia: ",arrayNumericaCopia)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia
arrayStringsOriginal.pop()
console.log("Esse é o original retirando o ultimo item: ",arrayStringsOriginal)
console.log("Esse é a copia com o último item: ",arrayStringsCopia)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
// vou retirar um item a partir do segundo item, por isso (1,1)
arrayMistaOriginal.splice(1,1)
console.log("Esse é o original retirando segundo item: ",arrayMistaOriginal)
console.log("Essa é a copia sem modificação: ",arrayMistaCopia)