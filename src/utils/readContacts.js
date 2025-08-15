import { readFile } from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const productsJSON = await readFile(PATH_DB, 'utf-8');

  return productsJSON ? JSON.parse(productsJSON) : [];
};