const db = require('../lib/db');

const getAllCharacters = async () => {
    const result = await db.query('SELECT * FROM characters ORDER BY id ASC');
    return result.rows;
};

const getCharactersById = async(id) => {
    const result = await db.query('SELECT * FROM characters WHERE id = $1',[id]);

    if(result.rows.length===0){
        return null;
    }

    return result.rows[0];
};

const createCharacter = async (name, type, description, image) => {
    const sql = `
        INSERT INTO characters (name, type, description, image)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    
    const values = [name, type, description, image];
    const result = await db.query(sql, values);

    return result.rows[0];

};

module.exports = {
    getAllCharacters,
    getCharactersById,
    createCharacter
};