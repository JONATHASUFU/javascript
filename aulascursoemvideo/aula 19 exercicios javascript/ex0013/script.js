function carregar(){
var msg=window.document.getElementById("msm")
var img=window.document.getElementById("img")
var data=new Date()
var hora= data.getHours()
msg.innerHTML=`Agora são ${hora} Horas`

if(hora>=0 && hora< 12){
    //bom dia
    img.src="manha.png"
    window.document.body.style.background="#eebf7b"
} else if(hora>=12&& hora<18){
    //boa tarde
    img.src='tarde.png'
    document.body.style.background="#c5735b"

}else{
    //boa noite
    img.src="noite.png"
    document.body.style.background="#456175"
    //456175
}
}
