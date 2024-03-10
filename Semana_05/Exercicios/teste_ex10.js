class FinanceiroFuncionario {
    constructor(nome, idade, salariobase) {
        this.nome = nome;
        this.idade = idade;
        this.salariobase = salariobase;
    }
}

class FinanceiroProfessor extends FinanceiroFuncionario {
    constructor(nome, idade, salariobase, disciplina, horasdeaula, valorhora) {
        super(nome, idade, salariobase);
        this.disciplina = disciplina;
        this.horasdeaula = horasdeaula;
        this.valorhora = valorhora;
    }
    
    calcularSalario() {
        let SalarioProfessor =  this.valorhora * this.horasdeaula;
        return SalarioProfessor;
    }
}

const professor1 = new FinanceiroProfessor('João', 22, 0, 'Matemática', 40, 50);
const professor2 = new FinanceiroProfessor('Maria', 20 , 0, 'Inglês', 50,50 );
console.log('Salário do Professor João é', professor1.calcularSalario()); 
console.log('Salário da professora Maria é:', professor2.calcularSalario());
