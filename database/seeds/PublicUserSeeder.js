'use strict'

/*
|--------------------------------------------------------------------------
| PublicUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PublicUserSeeder {
  async run() {
    await Factory.model('App/Models/PublicUser').createMany(5)
  }
}

module.exports = PublicUserSeeder
