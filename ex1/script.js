// Crie um código em que os 3 escopos estejam presentes e 
// em cada um deles haja um console.log identificando o escopo atual.
//Escopo Global, Escopo de Função e Escopo de Bloco.

// Criando a variável no escopo global
var escopo = 'global';

function functionScope () {
    // Dentro do escopo da função
    const escopo = 'funcao';
    console.log('Escopo dentro do bloco da ' + escopo);
}

//Imprime o escopo global
console.log('Escopo ' + escopo);
functionScope(escopo);
