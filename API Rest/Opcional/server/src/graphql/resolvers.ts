import { Character, getCharacter, getCharactersList } from "../db";

export const resolvers = {
    Query: {
        characters: async (): Promise<Character[]> => {
            const characters = await getCharactersList();
            return characters;
        },
        character: async (id:string): Promise<Character> => {
            const character = await getCharacter(id);
            return character;
        },
    },
};