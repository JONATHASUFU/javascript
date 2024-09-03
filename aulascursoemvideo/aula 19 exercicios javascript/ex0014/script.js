function carregar(){
var data=new Date()
var hora= data.getHours()
var msg = document.getElementById('msg');
msg.innerHTML=`Agora são ${hora} Horas`

const novaimagem = document.createElement('img');
      

if(hora>=0 && hora< 12){
    //bom dia
    novaimagem.src='manha.png'
    window.document.body.style.background="#eebf7b"
} else if(hora>=12&& hora<18){
    //boa tarde
    novaimagem.src='tarde.png'
    document.body.style.background="#c5735b"

}else{
    //boa noite
    novaimagem.src='noite.png'
    document.body.style.background="#456175"
    //456175
}
 // Adiciona a imagem ao container
 const fotos = document.getElementById('fotos');
 fotos.innerHTML = ''; // Limpa qualquer imagem existente
 fotos.appendChild(novaimagem);
}
