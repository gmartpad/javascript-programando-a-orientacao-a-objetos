class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo = 0; 
    // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valorSacado){
        if(this._saldo < valorSacado){
            return;
        }
        this._saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valorDepositado){
        if(valorDepositado <= 0){
            return;
        }
        this._saldo += valorDepositado;
        return valorDepositado;
    }

}

const cliente1 = new Cliente();

cliente1.nome = "Jose";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Joana";
cliente2.cpf = 88822233309;

const contaCorrenteJose = new ContaCorrente();

// contaCorrenteJose.saldo = 0;
contaCorrenteJose.agencia = 1001;

contaCorrenteJose.depositar(100);
contaCorrenteJose.depositar(-1);
contaCorrenteJose.sacar(100);

console.log(contaCorrenteJose);
console.log(cliente2);