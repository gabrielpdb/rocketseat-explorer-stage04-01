// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
3. Declare uma variável e atribua valores para cada um dos dados:
  * name: String
  * age: Number (integer)
  * stars: Number (float)
  * isSubscribed: Boolean
*/
let name = 'Gabriel'
let age = 22
let stars = 4.5
let isSubscribed = true

/* 
4. A variável student abaixo é de que tipo de dado?
Object

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {}

student.name = 'Gabriel'
student.age = 22
student.weight = 74.5
student.isSubscribed = true

console.log(student)
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)

/* 
5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/* 
6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students[0] = student
console.log(students)

/* 
7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
8. Crie um novo student e coloque na posição 1 do Array students
*/
let newStudent = {
  name: 'Jonh',
  age: 43,
  weight: 94.5,
  isSubscribed: false
}
students[1] = newStudent
console.log(students)

/* 
9. Sem rodar o código responda qual é a resposta do código abaixo e porquê. Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
*/
// Resposta: O retorno do código é undefined, pois ao declarar uma variável com var, ela assume escopo global e é declarada antes mesmo do restante do código, porém, a atribuição de valor é feita somente depois do console.log() nesse caso.
