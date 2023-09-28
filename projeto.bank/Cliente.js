export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
    }

    //constructor = irá atribuir somente um vez um valor, n podendo repeti-lo

}