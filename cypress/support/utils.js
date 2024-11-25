const { faker, Faker } = require('@faker-js/faker');

function desestruturarData(dataISO) {
    const data = new Date(dataISO);
    const meses = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const ano = data.getUTCFullYear();
    const mes = meses[data.getUTCMonth()]; // Pega o nome do mês a partir do índice
    const dia = data.getUTCDate();
  
    return { ano, mes, dia };
}
  
const dataISO = faker.date.birthdate();
const { ano, mes, dia } = desestruturarData(dataISO);

function criarPessoa() {
    return {
        username: faker.person.firstName(),
        lastname: faker.person.lastName(),
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthday: dia.toString(),
        birthmonth: mes,
        birthyear: ano.toString(),
        company: faker.company.buzzPhrase(),
    };
}

module.exports = criarPessoa;