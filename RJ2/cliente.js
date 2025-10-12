// Classe Cliente
function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    // Getters
    this.getNome = function () {
        return this.nome;
    };

    this.getNomeMaiusculo = function () {
        return this.nome.toUpperCase();
    };

    this.getNomeMinusculo = function () {
        return this.nome.toLowerCase();
    };

    this.getTelefoneCelular = function () {
        return this.telefoneCelular;
    };

    this.getEmail = function () {
        return this.email;
    };

    this.getEmailMaiusculo = function () {
        return this.email.toUpperCase();
    };

    this.getEmailMinusculo = function () {
        return this.email.toLowerCase();
    };

    this.getEndereco = function () {
        return this.endereco;
    };

    // Setters
    this.setNome = function (nome) {
        this.nome = nome;
    };

    this.setTelefoneCelular = function (telefoneCelular) {
        this.telefoneCelular = telefoneCelular;
    };

    this.setEmail = function (email) {
        this.email = email;
    };

    this.setEndereco = function (endereco) {
        this.endereco = endereco;
    };

    // Descriçao de Cliente
    this.getDescricao = function () {
        console.log("-----------------------");
        console.log(`Informaçoes do Cliente: `);
        console.log(this.nome);
        this.telefoneCelular.getDescricao();
        console.log(`Email: ${this.email}`);
        this.endereco.getDescricao();
        console.log('')
        
        
    };
};

// Classe Telefone
function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    // Getters
    this.getDdd = function () {
        return this.ddd;
    };

    this.getNumero = function () {
        return this.numero;
    };

    this.setDdd = function (ddd) {
        this.ddd = ddd;
    };

    this.setNumero = function (numero) {
        this.numero = numero;
    };

    // Descriçao de Telefone
    this.getDescricao = function () {
        console.log("-----------------------");
        console.log(`Telefone`);
        console.log(`DDD: ${this.ddd}`);
        console.log(`Número: ${this.numero}`);
    };
};

// Classe Endereco
function Endereco(rua, numero, cidade, estado) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    // Getters
    this.getEstado = function () {
        return this.estado;
    };

    this.getEstadoMaiusculo = function () {
        return this.estado.toUpperCase();
    };

    this.getEstadoMinusculo = function () {
        return this.estado.toLowerCase();
    };

    this.getCidade = function () {
        return this.cidade;
    };

    this.getCidadeMaiusculo = function () {
        return this.cidade.toUpperCase();
    };

    this.getCidadeMinusculo = function () {
        return this.cidade.toLowerCase();
    };

    this.getRua = function () {
        return this.rua;
    };

    this.getRuaMaiusculo = function () {
        return this.rua.toUpperCase();
    };

    this.getRuaMinusculo = function () {
        return this.rua.toLowerCase();
    };

    this.getNumero = function () {
        return this.numero;
    };

    // Setters
    this.setEstado = function (estado) {
        this.estado = estado;
    };

    this.setCidade = function (cidade) {
        this.cidade = cidade;
    };

    this.setRua = function (rua) {
        this.rua = rua;
    };

    this.setNumero = function (numero) {
        this.numero = numero;
    };

    // Descriçao de Endereço
    this.getDescricao = function () {
        console.log("-----------------------");
        console.log(`Endereço`);
        console.log(`Rua ${this.rua}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Cidade: ${this.cidade}`);
        console.log(`Estado: ${this.estado}`);
        console.log("-----------------------");
    };
};

// Criar Objetos de clientes
const clientes = [
    new Cliente("Emily Armstrong", new TelefoneCelular("12","999999999"),"deadsara@gmail.com",new Endereco("Av. Andrômeda","605","São José dos Campos","SP")),

    new Cliente("Mike Shinoda", new TelefoneCelular("12","988888888"),"fortminor@gmail.com",new Endereco("Av. Dr. João Guilhermino","1102","São José dos Campos","SP")),

    new Cliente("Chester Bennington", new TelefoneCelular("12","977777777"),"linkinpark@gmail.com",new Endereco("Rua Sete de Setembro","320","São José dos Campos","SP")),

    new Cliente("Tico Santa Cruz", new TelefoneCelular("12","966666666"),"detonautas@gmail.com",new Endereco("Rua Euclides Miragaia","3009","São José dos Campos","SP")),

    new Cliente("Fernando Badaui", new TelefoneCelular("12","955555555"),"cpm22@gmail.com",new Endereco("Avenida José Longo","1203","São José dos Campos","SP")),

    new Cliente("Adriano Egypcio", new TelefoneCelular("12","944444444"),"tihuana@gmail.com",new Endereco("Av. Dr. Nélson d'Ávila","206","São José dos Campos","SP"))
];

// Ordenar clientes por ordem alfabética
clientes.sort((a,b)=>a.getNome().localeCompare(b.getNome()));

// Imprimir um cliente por vez
for(const cliente of clientes){
    cliente.getDescricao();
}