const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

const addMsg = async (data) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO message(msg) VALUES (?)`;
  await connection.queryAsync(sql, [data.msg]);
  await connection.endAsync();
};

const readMsg = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `SELECT * FROM message`;
  const list = await connection.queryAsync(sql);
  await connection.endAsync();
  return list;
};

console.log("Completed");

module.exports = { addMsg, readMsg };
