import { enablePromise, openDatabase } from 'expo-sqlite';
// Defina a constante DATABASE_NAME
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
// Não feche a conexão aqui, mantenha-a aberta
// db.close();
}
export async function createTables(db) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'CREATE TABLE IF NOT EXISTS mydb (' +
'torcid INTEGER PRIMARY KEY, ' +
'torcmat VARCHAR(256) NOT NULL, ' +
'torcnome TEXT NOT NULL' +
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
export async function getNextTorcedorId(db) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'SELECT MAX(torcid) FROM mydb;',
[],
(_, result) => {
const maxId = result.rows.item(0)['MAX(torcid)'];
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
export async function insertTorcedor(db, torcid, torcmat, torcnome) {
return new Promise((resolve, reject) => {
db.transaction((tx) => {
tx.executeSql(
'INSERT INTO mydb (torcid, torcmat, torcnome) VALUES (?, ?, ?);',
[torcid, torcmat, torcnome],
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
const results = await db.executeSql('SELECT torcid, torcmat, torcnome FROM mydb');
const mydb = results[0].rows.map(row => row);
return mydb;
}