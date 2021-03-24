'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const contentTask = Faker.internet.userName();
  const updatedTask = Faker.internet.domainName();
  // add variables to virtual user's context:
  userContext.vars.contentTask = contentTask;
  userContext.vars.updatedTask = updatedTask;
  // continue with executing the scenario:
  return done();
}