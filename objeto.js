// objeto é um conjunto de propriedades, e toda propriedade possui nome e valor
var curso={
    sigla:"k1", // propriedades
    nome:"java" //propriedades
}

console.log(curso.sigla) //k1
console.log(curso["sigla"])//k1

curso.sigla="PHP";
console.log(curso["sigla"]) //PHP

//referencias - objetos acessado atraves de referencias
var x=curso
x.nome="JAVA2"
console.log(curso.nome) //JAVA2
console.log(x.nome)     //JAVA2
//prototipos cria objeto baseado em outro objeto
//criando objeto sem propriedades
var curso = {
    sigla: "k1",
    nome: "java"
};

var novo_curso = {};
novo_curso.__proto__ = curso; // Definindo 'curso' como protótipo de 'novo_curso'

// Modificando a propriedade 'nome' diretamente no 'novo_curso'
novo_curso.nome = "JAVA2";

console.log(novo_curso.nome); // Exibe "JAVA2"
console.log(curso.nome);      // Exibe "java", o original não é alterado
//Metodo Create object

var curso = {
    sigla: "k1",
    nome: "java3"
};

var novo_curso = Object.create(curso); // Criando 'novo_curso' com 'curso' como protótipo

novo_curso.nome = "Java4"; // Modificando a propriedade 'nome' diretamente em 'novo_curso'

console.log(novo_curso.nome); // Exibe "Java4"
console.log(curso.nome);      // Exibe "java3", o objeto original não é alterado

//se uma propriedade for adicionada a um objeto, ela adicionada a todos os ojetos que a utiliza como prototipo

var curso = {
    sigla: "k1",
    nome: "java"
};

var novo_curso = Object.create(curso); // Criando 'novo_curso' com 'curso' como protótipo

curso.cargahoraria= "30"; // criando uma propriedade

console.log(novo_curso.cargahoraria); // Exibe 30"
console.log(curso.cargahoraria);      // Exibe "java", o objeto original não é alterado

// agora se a variavel é criada no prototipo o objeto matter nao herda
var curso = {
    sigla: "k1",
    nome: "java"
};

var novo_curso = Object.create(curso); // Criando 'novo_curso' com 'curso' como protótipo

novo_curso.cargahoraria= "30"; // criando uma propriedade no novo_curso

console.log(novo_curso.cargahoraria); // Exibe 30"
console.log(curso.cargahoraria);      // Exibe undefined

// se o valor de uma propriedade de um objeto for modificado, os objeto que a utilizam como prototipo pode ser alterados, mas as alterações de valores dos objetos prototipo nao altera o valores do objeto matter.

var curso = {
    sigla: "k1",
    nome: "java"
};

var novo_curso = Object.create(curso);
curso.sigla="k12"
console.log(novo_curso.sigla) //k12
novo_curso.sigla="k33" // curso.sigla nao herda, neste momento a propriedade do prototipo se torna indepente da matter
console.log(curso.sigla)// k12
curso.sigla="k44"
console.log(curso.sigla) // k44
console.log(novo_curso.sigla) // k33
//removendo uma proriedade do objeto use a função delete
delete curso.nome
console.log(curso.nome) // undefined
// verificando a existencia de uma propriedade in
console.log("nome" in curso) // false
console.log("nome" in novo_curso) //false
console.log("sigla" in curso) // true



