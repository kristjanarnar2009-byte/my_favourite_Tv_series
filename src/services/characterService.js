const db = require('../lib/db');

const getAllCharacters = async () => {
    const result = await db.query('SELECT * FROM characters ORDER BYid ASC');
    return result.rows;
};

module.exports = {
    getAllCharacters
};