import { enablePromise, openDatabase } from 'expo-sqlite';

const DATABASE_NAME = 'mydb.db';
export async function getDbConnection() {
const db = await openDatabase({ name: DATABASE_NAME, location: 'default'});
return db;
}
export async function initDatabase() {
console.log('Iniciando o banco de dados...');
const db = await getDbConnection();
console.log('Banco de dados inicializado');
await createTables(db);
console.log('Tabela "mydb" criada');
}
export async function createTables(db) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'CREATE TABLE IF NOT EXISTS mydb (' +
'userid INTEGER PRIMARY KEY, ' +
'username VARCHAR(256) NOT NULL, ' +
'useremail TEXT NOT NULL' +
'userpassword INTEGER PRIMARY KEY, ' +
');',
[],
() => {
resolve();
},
(_, error) => {
reject(error);
}
);
});
});
}
export async function getNextUserId(db) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'SELECT MAX(user) FROM mydb;',
[],
(_, result) => {
const maxId = result.rows.item(0)['MAX(user)'];
resolve(maxId !== null ? maxId + 1 : 1);
},
(_, error) => {
console.error('Erro ao obter próximo ID:', error);
resolve(1); // Retorne 1 em caso de erro
}
);
});
});
}
export async function insertTorcedor(db, username, useremail, userpassword) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'INSERT INTO mydb (username, useremail, userpassword) VALUES (?, ?, ?);',
[username, useremail, userpassword],
(_, result) => {
resolve(result);
},
(_, error) => {
console.error('Erro durante a inserção:', error);
reject(error);
}
);
});
});
}
export async function getTorcedor(db) {
const results = await db.executeSql('SELECT username, useremail, userpassword FROM mydb');
const mydb = results[0].rows.map(row => row);
return mydb;
}














