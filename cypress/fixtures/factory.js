import faker from 'faker'

faker.setLocale('pt_BR')

import fakerbr from 'faker-br'

export class Factory{

    static postUsuarioPF(type){
        let cel = faker.phone.phoneNumber()

        switch(type){
            case 'válidos':
                return {
                    nome: faker.name.firstName(),
                    sobrenome: faker.name.lastName(),
                    email: `${faker.internet.email().toLowerCase()}`,
                    senha: `${faker.internet.password()}_9`,
                    cpf: fakerbr.br.cpf(),
                    celular: "44999845168"
                }
            
            case 'cadastroVálido':
                return {
                    nome: faker.name.firstName(),
                    sobrenome: faker.name.lastName(),
                    email: `${faker.internet.email().toLowerCase()}_test`,
                    senha: `${faker.internet.password()}_9`,
                    cpf: fakerbr.br.cpf(),
                    celular: "44999845168"
                }

            case 'cadastroInválido':
                return {
                    nome: "Caio",
                    email: "qualquer@",
                    senha: "qualquer"
                }
        }
    }

    static gerarEndereco(type){
        switch(type){
            case 'válidos':
                return {
                    //cep: faker.address.zipCode(),
                    cep: "02526-000",
                    numero: "268"
                }
        }
    }

    static gerarFormaPagamento(type){
        switch(type){
            case 'válidos':
                return {
                    numero_cartao: faker.finance.creditCardNumber(),
                    ccv: faker.finance.creditCardCVV(),
                    proprietario: faker.finance.accountName(),
                    parcelas: "4",
                    mes: "06",
                    ano: "26"
                }
        }
    }
}