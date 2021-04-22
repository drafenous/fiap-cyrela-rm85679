'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HousesSchema extends Schema {
  up() {
    this.create('houses', (table) => {
      table.increments()
      table.string('owner_name', 255).notNullable()
      table.string('owner_registry', 255).notNullable()
      table.integer('status', 1).notNullable().unique()
      table.string('address_line1', 255).notNullable().unique()
      table.string('address_line2', 255).unique()
      table.string('complement', 255);
      table.string('cep_zip', 255).notNullable()
      table.string('city', 255).notNullable()
      table.string('country', 255).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('houses')
  }
}

module.exports = HousesSchema
