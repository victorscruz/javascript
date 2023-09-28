import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0
    agencia;
    _cliente;
    _saldo = 0;
    //#saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    //static = atribuição estável. Irá permanecer estático para todas as classes.

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }
     //set - Funciona como acessor para dar acesso as palavras que estão privadas(criando uma regra de proteção)
    //Get - Retornar as funções. Atribuição somente de leitura.


    constructor(agencia, cliente){
            this.agencia = agencia
            this.cliente = cliente
            ContaCorrente.numeroDeContas += 1
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0){
             return
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
 }
