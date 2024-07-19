//Para ver cada numero que foi sorteado tires os comentarios do consoleLog



let MeusNumeros = [11, 28, 35, 74, 26, 17];
function Bingo() {
    let contadorDeAcertos = 0;
    for(let i = 0; i < 100;) {
    let nuemroSorteado = parseInt(Math.random() * 75)
    //console.log(nuemroSorteado);
    //console.log(contadorDeAcertos)

    if (nuemroSorteado == MeusNumeros[MeusNumeros.length - 1]) {
        MeusNumeros.pop();
        contadorDeAcertos++;
    //    console.log("Acertou");
    }
    if(contadorDeAcertos == 6) {
        return console.log("Parabéns, você ganhou");
    }

    }
}

Bingo();