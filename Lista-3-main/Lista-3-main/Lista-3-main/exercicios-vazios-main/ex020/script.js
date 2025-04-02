var precoProduto = Number(prompt("Digite o preco do produto"))

if(precoProduto < 20 ) {
    alert("barato")
}else if (precoProduto >= 20 && precoProduto <=100){
    alert("médio")
}else{
    alert("caro")
}