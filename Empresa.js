export class Empresa {
    #cnpj; 

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) { 
        this.razaoSocial = razaoSocial; 
        this.nomeFantasia = nomeFantasia; 
        this.#cnpj = cnpj; 
        this.endereco = endereco; 
        this.telefones = new Set(); 
        this.clientes = new Set(); 
    }

    get cnpj() { 
        return this.#cnpj;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial.toUpperCase()}\n`; 
        descricao += `Nome fantasia: ${this.nomeFantasia}\n`; 
        for (const cliente of this.clientes) {
            descricao += `Nome: ${cliente.nome}\n`; 
            descricao += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            for (const tel of cliente.telefones) {
                descricao += `ddd: ${tel.ddd} numero: ${tel.numero}\n`; 
            }
        }
        return descricao;
    }
}