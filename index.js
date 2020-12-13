import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Jose";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();

// cliente2.nome = "Joana";
// cliente2.cpf = 88822233309;

const contaCorrenteJose = new ContaCorrente();

// contaCorrenteJose.saldo = 0;
contaCorrenteJose.agencia = 1001;
contaCorrenteJose.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Joana";
conta2.cliente.cpf = 88822233309;
conta2.agencia = 1002;
console.log(conta2);

contaCorrenteJose.depositar(500);
contaCorrenteJose.depositar(-1);
contaCorrenteJose.sacar(100);

console.log(contaCorrenteJose);
console.log(cliente2);

contaCorrenteJose.transferir(20, conta2)

console.log(contaCorrenteJose);
console.log(conta2);