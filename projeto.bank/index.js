import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Contacorrente.js"



const cliente1 = new Cliente("Ricardo", 12345678900)

const cliente2 = new Cliente("Alice", 12345678901)

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente(101, cliente2)


contaCorrenteRicardo.transferir(200, conta2)

console.log(ContaCorrente.numeroDeContas)

// Para criar um modulo, terá que criar um package.json no terminal, digitando 'npm init', dando enter até o fim. No caso de deixar as classes em um arquivo separado.