import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";

const empresa = new Empresa();

// Cadastrar funcionários
const f1 = new Funcionario(1, "João", "Eletricista", 2500);
const f2 = new Funcionario(2, "Maria", "Engenheira", 5000);
const f3 = new Funcionario(3, "Carlos", "Técnico", 3000);

empresa.adicionarFuncionario(f1);
empresa.adicionarFuncionario(f2);
empresa.adicionarFuncionario(f3);

// Atualizar salário
empresa.atualizarSalario(2, 5500);

// Consultar funcionário
const funcionario = empresa.consultarFuncionario(2);

if (funcionario) {
    console.log("Dados do funcionário:");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: ${funcionario.salario}`);
} else {
    console.log("Funcionário não encontrado.");
}