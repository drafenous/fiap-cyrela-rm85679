'use strict'

const { Database } = require('sqlite3');

const Establishment = use('App/Models/Establishment');

class EstablishmentController {
  async index() {
    return Establishment.all();
  }

  async findById({ response, params }) {
    try {
      return Establishment.findBy('id', params.id);
    } catch (error) {
      return response.status(404).send({ error: error.message })
    }
  }

  async create({ request, response }) {
    try {
      const data = request.only(["name", "fantasy_name", "national_registry", "status"])
      const establishment = await Establishment.create(data);
      return establishment;
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const all = request.all();
      const affectedRow = await Establishment.find(id)
      if (!affectedRow) {
        return response.status(404).send({ error: `Establishment ${id} not found` });
      }
      affectedRow.merge({ ...all });
      await affectedRow.save();
      return affectedRow;
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async delete({ params, response }) {
    try {
      const { id } = params;
      const affectedRow = await Establishment.find(id);
      if (!affectedRow) {
        return response.status(404).send({ error: `Establishment ${id} not found` });
      }
      await affectedRow.delete();
      return affectedRow;
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }
}

module.exports = EstablishmentController
