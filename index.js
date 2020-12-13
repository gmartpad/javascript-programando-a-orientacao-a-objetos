import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Jose", 11122233309);
const cliente2 = new Cliente("Joana", 88822233309);

const contaCorrenteJose = new ContaCorrente(cliente1, 1001);
const contaCorrenteJoana = new ContaCorrente(cliente2, 1002);

console.log(contaCorrenteJoana);

contaCorrenteJose.depositar(500);
contaCorrenteJose.depositar(-1);
contaCorrenteJose.sacar(100);

console.log(contaCorrenteJose);
console.log(contaCorrenteJoana);

contaCorrenteJose.transferir(20, contaCorrenteJoana)

console.log(contaCorrenteJose);
console.log(contaCorrenteJoana);