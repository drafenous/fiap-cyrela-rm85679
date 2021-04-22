'use strict'

const HouseModel = use('App/Models/House');

class HouseController {
  async index() {
    return HouseModel.all();
  }

  async findById({ response, params }) {
    try {
      return HouseModel.findBy('id', params.id);
    } catch (error) {
      return response.status(404).send({ error: `Error: ${error.message}` })
    }
  }

  async create({ request, response }) {
    try {
      const data = request.only(["owner_name", "owner_registry", "status", "address_line1", "address_line2", "complement", "cep_zip", "city", "country"])
      const house = await HouseModel.create(data);
      return house;
    } catch (error) {
      return response.status(500).send({ error: `Error: ${error.message}` })
    }
  }
}

module.exports = HouseController
