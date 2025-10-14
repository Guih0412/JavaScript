// modelo.js
import { Cliente, Empresa, Telefone, Endereco } from 'rj4modulo';

// Criando a empresa
const empresa = new Empresa(
    'Loja de Camisas de Futebol LTDA',
    'Surf Attack (Galeria Sete)',
    '12.345.678/0001-99',
    new Endereco('SP', 'São José dos Campos', 'Rua Sete de Setembro', 378)
);

// Adicionando telefones à empresa
empresa.adicionarTelefone(new Telefone('12', '98869-5615'));
empresa.adicionarTelefone(new Telefone('12', '98869-5616'));

// Criando clientes
const cliente1 = new Cliente('Rodrigo Garro', '123.456.789-01', new Endereco('SP', 'São José dos Campos', 'Rua XV de Novembro', 10));
cliente1.adicionarTelefone(new Telefone('12', '99999-0001'));
cliente1.adicionarTelefone(new Telefone('12', '98888-1111'));

const cliente2 = new Cliente('Memphis Depay', '123.456.789-02', new Endereco('SP', 'São José dos Campos', 'Rua Sebastião Humel', 20));
cliente2.adicionarTelefone(new Telefone('12', '99999-0002'));
cliente2.adicionarTelefone(new Telefone('12', '98888-1112'));

const cliente3 = new Cliente('Yuri Alberto', '123.456.789-03', new Endereco('SP', 'São José dos Campos', 'Rua Paraibuna', 30));
cliente3.adicionarTelefone(new Telefone('12', '99999-0003'));
cliente3.adicionarTelefone(new Telefone('12', '98888-1113'));

// Adicionando clientes à empresa
empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);

// Imprimindo detalhes
empresa.detalhe();
