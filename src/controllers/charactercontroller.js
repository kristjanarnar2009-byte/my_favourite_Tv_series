const characterService = require('../services/characterService');

const getHomePage = async (req, res) => {
    try {
        const characters = await characterService.getAllCharacters();
        console.log('hi')
        res.render('index', {
            title: 'my little pony vefurinn',
            characters: characters
        });
        console.log('helo')
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getCharacterDetails=async(req, res)=>{
    try{
      const id = req.params.id;
      const character=await characterService.getCharactersById(id);

      if(!character){
        return res.status(404).send('Úps! characterin fannst ekki.');
      }

      res.render('character-details',{
        title:character.title,
        character:character
      });
    }catch(error){
      console.error('Villa við að sækja characters:', error);
      res.status(500).send('Kerfisvilla - Get ekki hlaðið characters');
    }
};

const getAddCharacterForm = (req, res) => {
  res.render('add-character', {
    title: 'Bæta við persónu',  
    name: 'Sitja inn nafn'
  });
};

const createNewCharacter = async (req, res) => {
    try {
        const { name, type, description } = req.body;

        if (!name) {
          return res.status(400).send(
            'Nafn character má ekki vera tómur!'
          );
        }
      
        const newCharacter = await characterService.createCharacter(
          name,
          type,
          description,
          "mlp.jpg"
        );

        res.redirect(`/character/${newCharacter.id}`);
    } catch (error) {
        console.error('Villa við að gera nafn fyrir Character:', error);
        res.status(500).send(
          'Kerfisvilla - Tókst ekki að vista nafn'
        ); 
    }
};

module.exports = {
 getHomePage,
 getCharacterDetails,
 getAddCharacterForm,
 createNewCharacter
};