export class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) { 
        this.nome = nome; 
        this.endereco = endereco; 
        this.#cpf = cpf; 
        this.telefones = new Set();
    }

    get cpf() {
        return this.#cpf;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    
    getNomeCaixaAlta() {
        return this.nome.toUpperCase();
    }
}