var idade1 = Number(prompt("Digite uma idade"))
var idade2 = Number(prompt("Digite um idade"))

if(idade1 == idade2){ alert ("As duas idades são iguais") }
else if(idade1 < idade2){ alert (`${idade1} é menor que ${idade2}`) }
else{ alert(`${idade1} é maior que ${idade2}`) }