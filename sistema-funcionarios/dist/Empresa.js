"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor() {
        this.funcionarios = [];
    }
    // Adicionar funcionário
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} adicionado.`);
    }
    // Atualizar salário
    atualizarSalario(matricula, salario) {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (!funcionario) {
            console.log("Erro: Funcionário não encontrado.");
            return;
        }
        funcionario.salario = salario;
        console.log(`Salário atualizado para ${funcionario.nome}.`);
    }
    // Consultar funcionário
    consultarFuncionario(matricula) {
        return this.funcionarios.find(f => f.matricula === matricula);
    }
}
exports.Empresa = Empresa;
