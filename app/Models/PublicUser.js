'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PublicUser extends Model {
  static get table() {
    return 'PublicUsers'
  }
}

module.exports = PublicUser
