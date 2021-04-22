'use strict'

const PublicUser = use('App/Models/PublicUser');

class PublicUserController {
  async index() {
    return PublicUser.all();
  }

  async findById({ response, params }) {
    try {
      return PublicUser.findBy('id', params.id);
    } catch (error) {
      return response.status(404).send({ error: `Error: ${error.message}` })
    }
  }

  async create({ request, response }) {
    try {
      const data = request.only(["fullname", "email", "entity", "gender", "bday", "password"])
      const user = await PublicUser.create(data);
      return user;
    } catch (error) {
      return response.status(500).send({ error: `Error: ${error.message}` })
    }
  }
}

module.exports = PublicUserController
