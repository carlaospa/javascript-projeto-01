//var nome = "Carlos Alberto ";
//var idade = 42;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert( idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLocaleLowerCase());
//console.log(n1 * n2);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//console.log(lista[0]);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);
*/

//var idade = 18;
/*
var idade = prompt("Qual é a sua idade: ");
if (idade >= 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}
*/

/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count); 
}
*/

/*
var d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getMinutes());
console.log(d.getDay());
console.log(d.getHours());
*/

function soma(n1, n2){
    return n1 + n2;
}

function botao(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>clicar aqui para abrir um site</b>";
    //console.log(document.getElementById("agradecimento"));

}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse";
    elemento.innerHTML = "Passar o mouse";
}

function load(){
    console.log("página carregada ");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
console.log(soma(5, 18));

function setReplace(frase, textoAntigo, textoNovo){
    return frase.replace(textoAntigo, textoNovo);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validarIdade(idade){
    var validar  = false;
    if (idade >= 18 ){
        validar = true;
    }
    return validar;
}

var idade = prompt("Digite a idade: ");
if (validarIdade(idade)){
    console.log(idade + " anos maior de idade");
}else{
    console.log(idade + " anos menor de idade"); 
}
*/








