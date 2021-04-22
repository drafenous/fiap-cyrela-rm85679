'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicUsersSchema extends Schema {
  up() {
    this.create('PublicUsers', (table) => {
      table.increments()
      table.string('email', 120).notNullable().unique()
      table.string('entity', 14).notNullable()
      table.string('fullname', 50).notNullable()
      table.integer('gender', 1).notNullable()
      table.date('bday').notNullable()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('PublicUsers')
  }
}

module.exports = PublicUsersSchema
