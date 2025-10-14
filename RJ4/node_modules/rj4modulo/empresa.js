// empresa.js

// Classe Cliente
class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf; // atributo privado
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get cpf() {
        return this.#cpf;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    get nomeCaixaAlta() {
        return this.nome.toUpperCase();
    }

    get nomeCaixaBaixa() {
        return this.nome.toLowerCase();
    }
}

// Classe Telefone
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

// Classe Endereco
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    get estadoCaixaAlta() {
        return this.estado.toUpperCase();
    }

    get estadoCaixaBaixa() {
        return this.estado.toLowerCase();
    }

    get cidadeCaixaAlta() {
        return this.cidade.toUpperCase();
    }

    get cidadeCaixaBaixa() {
        return this.cidade.toLowerCase();
    }

    get ruaCaixaAlta() {
        return this.rua.toUpperCase();
    }

    get ruaCaixaBaixa() {
        return this.rua.toLowerCase();
    }
}

// Classe Empresa
class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    get razaoSocialCaixaAlta() {
        return this.razaoSocial.toUpperCase();
    }

    get razaoSocialCaixaBaixa() {
        return this.razaoSocial.toLowerCase();
    }

    get nomeFantasiaCaixaAlta() {
        return this.nomeFantasia.toUpperCase();
    }

    get nomeFantasiaCaixaBaixa() {
        return this.nomeFantasia.toLowerCase();
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    detalhe() {
        console.log(`Razão Social: ${this.razaoSocial}`);
        console.log(`Nome Fantasia: ${this.nomeFantasia}`);
        console.log('-----------------------------');

        this.clientes.forEach(cliente => {
            console.log(`\nNome: ${cliente.nome}`);
            console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.numero}, ${cliente.endereco.cidade} - ${cliente.endereco.estado}`);

            cliente.telefones.forEach(telefone => {
                console.log(`Telefone: (${telefone.ddd}) ${telefone.numero}`);
            });
        });
    }
}

// Exportar classes como módulo ES6
export { Cliente, Telefone, Endereco, Empresa };
