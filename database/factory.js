'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/PublicUser', (faker) => {
  return {
    email: faker.email({ domain: 'teste.com.br' }),
    fullName: faker.name(),
    entity: faker.cpf(),
    gender: 1,
    bday: faker.date({ string: true }),
    password: 'secret',
  }
})

Factory.blueprint('App/Models/Establishment', (faker) => {
  return {
    name: faker.company(),
    fantasy_name: faker.company(),
    national_registry: faker.cnpj(),
    status: 1
  }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

