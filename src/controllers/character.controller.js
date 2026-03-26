const characterService = require('../services/characterService');

const getHomePage = async (req, res) => {
    try {
        const characters = await characterService.getAllCharacters();
        
        res.render('index', {
            title: 'my little pony vefurinn',
            characters: characters
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getHomePage
};