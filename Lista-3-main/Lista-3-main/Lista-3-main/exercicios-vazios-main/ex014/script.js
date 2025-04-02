var temperatura = Number (prompt("Digite a temperatura em graus celsius º"))

/* 20 */

if(temperatura < 15) {
    alert(`temperatura ${temperatura}º = FRIO`)
}else if(temperatura >= 15 && temperatura <= 25 ){
    alert(`temperatura ${temperatura}º = AGRADAVÉL`)
}else{
    alert(`temperatura ${temperatura}º = QUENTE`)
}