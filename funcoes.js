// as funçoes em javascript são objetos
var mul = function(x,y){
    return x*y
}
var resultado= mul(2,3)
console.log(resultado) //6

// Quando um função faz parte de um objeto , ela é chamada de metodo

var calculadora = {
    mul: function(x, y) {
        return x * y;
    }
};

var resultado = calculadora.mul(3, 3); // Chamando o método 'mul' do objeto 'calculadora'
console.log(resultado); // Exibe 9

//Para que mul seja considerado um método, ele deve ser parte de um objeto como uma de suas propriedades.

// apply

var calculadora = {
    mul: function(x, y) {
        return x * y;
    }
};

// Usando 'apply' para chamar o método 'mul' com o objeto 'calculadora' como contexto
//Passagem de Argumentos: Os argumentos são passados em forma de array. Isso é útil quando os argumentos são dinâmicos ou vêm de outra //parte do código.
var resultado = calculadora.mul.apply(calculadora, [2, 3]); // Passa [2, 3] como array de argumentos
console.log(resultado); // Exibe 6

var calculadora = {
    res: 0,  // Correção: adicionando vírgula
    mul: function(x, y) {
        this.res = x * y;  // Atualizando 'res' com o resultado da multiplicação
    }
};

// Usando 'apply' para chamar o método 'mul' com o objeto 'calculadora' como contexto
calculadora.mul.apply(calculadora, [3, 3]); // Passando [3, 3] como array de argumentos

console.log(calculadora.res); // Exibe 9, pois 3 * 3 = 9


var calculadora = {
    res: 0,  // Correção: adicionando vírgula
    mul: function(x, y) {
        this.res = x * y;  // Atualizando 'res' com o resultado da multiplicação
    }
};

// Chamando o método 'mul' diretamente no objeto 'calculadora'
calculadora.mul(4, 4);

console.log(calculadora.res); // Exibe 16, pois 4 * 4 = 16


// os argumentos passado na chamada da funçao pode ser recuperados atraves do array Arguments

var soma= function(){
    var soma=0;
    for(var i=0; i<arguments.length;i++){
        soma+=arguments[i]
    }
    return soma
}
var resultado=soma(2)
console.log(resultado) //2
var resultado=soma(2,4)
console.log(resultado) //2+4=6
var resultado=soma(2,4,5)
console.log(resultado)//11
var resultado=soma(2,4,5,6,1)
console.log(resultado)//18