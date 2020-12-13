export class ContaCorrente {
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