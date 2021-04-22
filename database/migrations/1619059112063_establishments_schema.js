'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstablishmentsSchema extends Schema {
  up() {
    this.create('establishments', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique();
      table.string('fantasy_name', 255).notNullable().unique();
      table.string('national_registry', 255).notNullable().unique();
      table.string('status', 1).notNullable();
      table.timestamps()
    })
  }

  down() {
    this.drop('establishments')
  }
}

module.exports = EstablishmentsSchema
