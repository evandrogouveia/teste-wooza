export class PlataformaModel {
    sku: string;
    nome: string;
    descricao: string;
}

export class Aparelho {
    nome: string;
    valor: string;
    numeroParcelas: number;
    valorParcela: string;
}

export class PlanoModel {
    sku: string;
    franquia: string;
    valor: string;
    ativo: boolean;
    aparelho: Aparelho;
}

export class FormModel {
    nome: string;
    email: string;
    datanascimento: string;
    cpf: number;
    telefone: number;
}
