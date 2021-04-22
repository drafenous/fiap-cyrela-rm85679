'use strict'

const Establishment = use('App/Models/Establishment');

class EstablishmentController {
  async index() {
    return Establishment.all();
  }

  async findById({ response, params }) {
    try {
      return Establishment.findBy('id', params.id);
    } catch (error) {
      return response.status(404).send({ error: `Error: ${error.message}` })
    }
  }

  async create({ request, response }) {
    try {
      const data = request.only(["name", "fantasy_name", "national_registry", "status"])
      const establishment = await Establishment.create(data);
      return establishment;
    } catch (error) {
      return response.status(500).send({ error: `Error: ${error.message}` })
    }
  }
}

module.exports = EstablishmentController
