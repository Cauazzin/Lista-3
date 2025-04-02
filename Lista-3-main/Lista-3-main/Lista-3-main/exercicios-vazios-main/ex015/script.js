var nota = Number(prompt("Digite uma nota de 0 - 10"))

if(nota >=9 ) {
    alert(`Nota ${nota} = EXCELENTE`)
}else if(nota >=7 && nota <=8){
    alert(`Nota ${nota} = BOM`)
}else if(nota >=5 && nota <=6) {
    alert(`Nota ${nota} = REGULAR`)
}else{
    alert(`Nota ${nota} = INSUFICIENTE`)
}