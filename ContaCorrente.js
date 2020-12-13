export class ContaCorrente {
    agencia;
    cliente;


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

    transferir(valorTransferido, contaBeneficiaria){
        const valorSacado = this.sacar(valorTransferido);
        if(isNaN(valorSacado)){
            console.error("Não foi possível realizar transferência, saldos insuficientes")
            return;
        }
        contaBeneficiaria.depositar(valorSacado);
    }

}