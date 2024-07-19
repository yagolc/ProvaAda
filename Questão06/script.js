let Objeto = [
    {
        nome: 'Pedro',
        idade: 14,
        turma: "A"
    },
    {
        nome: 'Maria',
        idade: 12,
        turma: "A"
    },
    {
        nome: 'Marcos',
        idade: 15,
        turma: "B"
    },
    {
        nome: 'Michel',
        idade: 13,
        turma: "A"
    },
    {
        nome: 'Ana',
        idade: 11,
        turma: "B"
    },
    {
        nome: 'Bruno',
        idade: 10,
        turma: "B"
    }

]

function IdadeDoMaisVelhoTurmaA(){

    let IdadeMaior = 0
    let NomeDoMaisVelho = '';
    for(let i = 0; i < Objeto.length; i++){
        if(Objeto[i].turma == 'A'){
            if(Objeto[i].idade > IdadeMaior){
                IdadeMaior = Objeto[i].idade
                NomeDoMaisVelho = Objeto[i].nome
            }
        }
    }
    return console.log(NomeDoMaisVelho + ' ' + IdadeMaior)
}

function MediaTodosAlunos(){

    let soma = 0
    for(let i = 0; i < Objeto.length; i++){
        soma += Objeto[i].idade
    }

    return console.log(soma / Objeto.length)
}

IdadeDoMaisVelhoTurmaA();
MediaTodosAlunos()