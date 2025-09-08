let num = [9, 5, 3, 1, 6]
num.sort()
num.push(4)
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
let pos = num.indexOf(7)
if (pos == -1) {
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor 3 está na posição ${pos}.`)
}
