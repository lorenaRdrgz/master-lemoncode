import { Router } from 'express';
import {
  CharacterEdit,
  getCharactersList,
  getCharacter,
  updateCharacter,
  insertCharacter,
  deleteCharacter,
} from '../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharactersList();
    res.send(characters);
  })
  .delete('/:id', async (req, res) => {
    const id = req.params.id;
    const success = await deleteCharacter(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
