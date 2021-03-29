var distAnosLuz = prompt("Qual a distância em anos-luz?")

var valorDistAnosLuz = parseFloat(distAnosLuz) //converte texto em num com casas decimais 

var valorEmKm = valorDistAnosLuz * 9460528404879.4
var valorEmKmFixado = valorEmKm //fixa o valor para ter 2 casas decimais

alert(valorEmKmFixado.toLocaleString('pt-BR') + " quilômetros") 
//alert(Math.round(valorEmKmFixado) + "quilômetros") 

//alert(valorEmKmFixado + "quilômetros") 

//Revisão
//var int - float - string
//alert - parseInt - parseFloat - prompt
//operações +somar * multiplicar