const knex = require("../db/fixtures/connection");

function list() {
  return knex("products").select("*");
}

function read(product_id) {
    return knex("products").select("*").where({ product_id }).first();
  }

module.exports = {
  list,
  read
};
