const db = require('../lib/db');

const getAllCharacters = async () => {
    const result = await db.query('SELECT * FROM characters ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getAllCharacters
};