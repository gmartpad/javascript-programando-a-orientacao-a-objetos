import { Cliente } from './Cliente.js'

export class ContaCorrente {

    agencia;
    
    //------------------------------------------------------------
    
    _cliente;

    // #saldo = 0; 
    // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    //-------------------------------------------------------------

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    //------------------------------------------------------------

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
    }

    //------------------------------------------------------------

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