const db = require('../data/dbConfig')

function findLanceData() {
    return db("platform_sessions");
  }

module.exports = { findLanceData }