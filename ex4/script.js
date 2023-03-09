// forEach()
/* const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoForEach) // undefined


// map
function nossoMap(arr, funcao) {
    const novoArray = [];
    for(let i = 0; i < arr.length; i = i + 1) {   
        novoArray.push(funcao(arr[i], i));
    }    
    return novoArray
}

nossoMap(['nome', 'nome2'], function(nome, indice) {
    console.log(nome, indice)
})
 */

//find
/* let alunos = [ 
    {nome: 'joão', idade: 32},
    {nome: 'josé', idade: 18}, 
    {nome: 'joão', idade: 16}, 
    {nome: 'maria', idade: 21}
  ];
  
  let aluno = alunos.find(function(aluno) {
    return aluno.nome === 'joão';
  });
  
  console.log(aluno);// Resultado: { nome: 'joão', idade: 32 }
 */
  //reduce
/*   const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);// Expected output: 10
 */
//every
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));// Expected output: true

