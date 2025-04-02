var nota1 = Number(prompt("Digite a nota"))
var nota2 = Number(prompt("Digite a nota"))
var nota3 = Number(prompt("Digite a nota"))

var media = (nota1+nota2+nota3) / 3

if(media >= 6) {
    alert(`Sua media foi de ${media} = APROVADO`)
}else{
    alert(`Sua media foi de ${media} = REPROVADO`)
}