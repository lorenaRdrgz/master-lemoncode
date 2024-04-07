import { Character, deleteCharacter, getCharacter, getCharactersList, insertCharacter, updateCharacter } from "../db";

export const resolvers = {
    Query: {
        characters: async (): Promise<Character[]> => {
            const characters = await getCharactersList();
            return characters;
        },
        character: async (_, args): Promise<Character> => {
            const {id} = args;
            
            const character = await getCharacter(id);
            return character;
        },
    },
    Mutation:{
        saveCharacter: async (_, args): Promise<boolean> =>{
            const {character} = args;
            if(character.id){
               await updateCharacter(character);     
            }
            else {
                await insertCharacter(character);
            }
            return true;
        },
        deleteCharacter: async(_, args):Promise <boolean> =>{
              const {id} = args;
              
              await deleteCharacter(id);

            return true;
        }
    }
};