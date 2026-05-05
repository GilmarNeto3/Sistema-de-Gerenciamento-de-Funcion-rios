import { Funcionario } from "./Funcionario";

export class Empresa {
    private funcionarios: Funcionario[] = [];

    // Adicionar funcionário
    public adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} adicionado.`);
    }

    // Atualizar salário
    public atualizarSalario(matricula: number, salario: number): void {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);

        if (!funcionario) {
            console.log("Erro: Funcionário não encontrado.");
            return;
        }

        funcionario.salario = salario;
        console.log(`Salário atualizado para ${funcionario.nome}.`);
    }

    // Consultar funcionário
    public consultarFuncionario(matricula: number): Funcionario | undefined {
        return this.funcionarios.find(f => f.matricula === matricula);
    }
}