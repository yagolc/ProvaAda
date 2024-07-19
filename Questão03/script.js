function Informações() {

    const NomeUsuario = prompt('Por favor, digite seu nome: ');

    const NotaUsuario = prompt('Por favor, digite sua nota: ');

    if(NotaUsuario == ""){

        console.log("A nota não foi informada");
        return;
    }

    if(NotaUsuario  >= 8){

        console.log('Parabéns, ' + NomeUsuario + '! Você foi aprovado!');
    }else{

        console.log('Olá, ' + NomeUsuario + ' Infelizmente você foi reprovado');
    }
}

Informações();
