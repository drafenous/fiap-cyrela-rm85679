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
      return response.status(404).send({ error: error.message })
    }
  }

  async create({ request, response }) {
    try {
      const data = request.only(["fullname", "email", "entity", "gender", "bday", "password"])
      const user = await PublicUser.create(data);
      return user;
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const all = request.all();
      const affectedRow = await PublicUser.find(id)
      if (!affectedRow) {
        return response.status(404).send({ error: `PublicUser ${id} not found` });
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
      const affectedRow = await PublicUser.find(id);
      if (!affectedRow) {
        return response.status(404).send({ error: `PublicUser ${id} not found` });
      }
      await affectedRow.delete();
      return affectedRow;
    } catch (error) {
      return response.status(500).send({ error: error.message })
    }
  }
}

module.exports = PublicUserController
