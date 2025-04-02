var valorTotal = Number(prompt("Digite o valor total:"))
var codigoDesconto = prompt("Digite o código de desconto").toUpperCase()

if(codigoDesconto == "DESC10"){
    alert("Desconto Aplicado")
    var desconto = valorTotal * (10 / 100)
    var valorTotalDessconto = valorTotal - desconto

    alert(`O valor total foi de ${valorTotal} e saiu por ${valorTotalDessconto}`)
}else {
    alert(`O Código de desconto ${codigoDesconto} não existe
        
        O valor total foi de ${valorTotal}`)
}