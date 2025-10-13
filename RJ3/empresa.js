// Classe Cliente
class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf; // Atributo privado
    }


    get cpf() {
        return this.#cpf;
    }

    // Nome com letras maiusculas
    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    // Nome com letrar minusculas
    getNomeMinusculo() {
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


// Classe Endereço
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEstadoMaiusculo() {
        return this.estado.toUpperCase;
    }

    getEstadoMinusculo() {
        return this.estado.toLowerCase;
    }


    getCidadeMaiusculo() {
        return this.cidade.toUpperCase;
    }

    getCidadeMinusculo() {
        return this.cidade.toLowerCase;
    }


    getRuaMaiusculo() {
        return this.rua.toUpperCase;
    }

    getRuaMinusculo() {
        return this.rua.toLowerCase;
    }


}


// Classe Empresa
class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj; // Atributo Privado
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    getRazaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase;
    }

    getRazaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase;
    }


    getNomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase;
    }

    getNomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase;
    }



    // Detalhe com informaçoes da empresa e dos clientes
    getDetalhe() {
        console.log(`Razão Social: ${empresa.razaoSocial}\nNome Fantasia: ${empresa.nomeFantasia}\n------------------------------------`);
        for (let cliente of this.clientes) {
            console.log(`\nNome: ${cliente.nome}\nEstado: ${cliente.endereco.estado}   Cidade: ${cliente.endereco.cidade}   Rua: ${cliente.endereco.rua}   Número: ${cliente.endereco.numero}`)

            for (let telefone of cliente.telefones) {
                console.log(`DDD: ${telefone.ddd}   Número: ${telefone.numero}`)
            }
        }
    }
}


// Criando objeto da classe Empresa
const empresa = new Empresa("Loja de Camisas de Futebol LTDA", "Surf Attack (Galeria Sete)", "12.345.678/0001-99", new Endereco("SP", "São José dos Campos", "Rua Sete de Setembro", "378"));

// Adicionando telefones à empresa
empresa.telefones.add(new Telefone("12", "98869-5615"));
empresa.telefones.add(new Telefone("12", "98869-5615"));



// Cliente 1
const cliente1 = new Cliente('Rodrigo Garro', '123.456.789-01', new Endereco('SP', 'São José dos Campos', 'Rua XV de Novembro', 10));
cliente1.telefones.add(new Telefone("12", "99999-0001"));
cliente1.telefones.add(new Telefone("12", "98888-1111"));

// Cliente 2
const cliente2 = new Cliente('Memphis Depay', '123.456.789-02', new Endereco('SP', 'São José dos Campos', 'Rua Sebastião Humel', 20));
cliente2.telefones.add(new Telefone("12", "99999-0002"));
cliente2.telefones.add(new Telefone("12", "98888-1112"));

// Cliente 3
const cliente3 = new Cliente('Yuri Alberto', '123.456.789-03', new Endereco('SP', 'São José dos Campos', 'Rua Paraibuna', 30));
cliente3.telefones.add(new Telefone("12", "99999-0003"));
cliente3.telefones.add(new Telefone("12", "98888-1113"));

// Cliente 4
const cliente4 = new Cliente('Hugo Souza', '123.456.789-04', new Endereco('SP', 'São José dos Campos', 'Rua Humaitá', 40));
cliente4.telefones.add(new Telefone("12", "99999-0004"));
cliente4.telefones.add(new Telefone("12", "98888-1114"));

// Cliente 5
const cliente5 = new Cliente('Gui Negão', '123.456.789-05', new Endereco('SP', 'São José dos Campos', 'Av Heitor Vila Lobos', 50));
cliente5.telefones.add(new Telefone("12", "99999-0005"));
cliente5.telefones.add(new Telefone("12", "98888-1115"));



// Adicionar clientes à empresa
empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

// Imprimir detalhes da empresa e dos clientes
empresa.getDetalhe();










































