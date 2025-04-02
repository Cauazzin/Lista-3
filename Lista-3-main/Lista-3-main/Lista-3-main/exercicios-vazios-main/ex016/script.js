var regiao = Number(prompt(`Digite sua região [1] Brasil [2] EUA`))
var idade = Number(prompt("Digite sua idade"))

if(idade >= 18 && regiao == 1) {
    alert(`Região BRASIL ${idade} anos = Maior Idade`)
}else if (idade < 18 && regiao == 1){
    alert(`Região BRASIL ${idade} anos = menor Idade`)
}else if(idade >=21 && regiao == 2) {
    alert(`Regiao EUA ${idade} anos = Maior idade`)
}else{
    alert(`Regiao EUA ${idade} anos = Menor idade`)
}

