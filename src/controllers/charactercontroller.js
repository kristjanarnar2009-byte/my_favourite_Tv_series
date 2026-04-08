import { getAllCharacters, getCharactersById } from '../services/characterService';

const getHomePage = async (_req, res) => {
    try {
        const characters = await getAllCharacters();
        
        res.render('index', {
            title: 'my little pony vefurinn',
            characters: characters
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getCharacterDetails=async(req, res)=>{
    try{
      const id = req.params.id;
      const character=await getCharactersById(id);

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

export default {
 getHomePage,
 getCharacterDetails
};