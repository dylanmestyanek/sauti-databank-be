const db = require("../data/dbConfig");

const batchInsert = (rows) => {
  return db.batchInsert('info_demand_test', rows, 1000).then(() => {
    return db('info_demand_test').count('*').then(res => console.log("ADDED", res));
  });
}

const testTruncate = () => {
  return db('info_demand_test').truncate().then(() => {
    return db('info_demand_test').count('*').then(res => console.log("DELETED", res))
  });
}

module.exports = {
  batchInsert,
  testTruncate
};
