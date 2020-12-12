class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valorSacado){
        if(this.saldo >= valorSacado){
            this.saldo -= valorSacado;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Jose";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Joana";
cliente2.cpf = 88822233309;

const contaCorrenteJose = new ContaCorrente();

contaCorrenteJose.saldo = 0;
contaCorrenteJose.agencia = 1001;

console.log(contaCorrenteJose.saldo);
contaCorrenteJose.saldo += 100;
console.log(contaCorrenteJose.saldo);
contaCorrenteJose.sacar(100);
console.log(contaCorrenteJose.saldo);



console.log(cliente1);
console.log(cliente2);