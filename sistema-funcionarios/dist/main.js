"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const Empresa_1 = require("./Empresa");
const empresa = new Empresa_1.Empresa();
// Cadastrar funcionários
const f1 = new Funcionario_1.Funcionario(1, "João", "Eletricista", 2500);
const f2 = new Funcionario_1.Funcionario(2, "Maria", "Engenheira", 5000);
const f3 = new Funcionario_1.Funcionario(3, "Carlos", "Técnico", 3000);
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
}
else {
    console.log("Funcionário não encontrado.");
}
