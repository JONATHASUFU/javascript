function tabuada(){
var valor=window.document.getElementById("num")
var resultadoDiv = document.getElementById("resultado");
var tab=valor.value
    for(var i=0; i<=10; i++){
    const item = document.createElement('div');
    var resultado = tab * i;
    item.textContent = `${tab} x ${i} = ${resultado}`;
    resultadoDiv.appendChild(item);
    }
}




