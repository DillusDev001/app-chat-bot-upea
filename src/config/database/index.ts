import { MemoryDB } from "@builderbot/bot";
import { JsonFileDB } from '@builderbot/database-json';

//export type IDatabase = typeof JsonFileDB
//export const database = new JsonFileDB({ filename: 'db.json' });

export type IDatabase = typeof MemoryDB;
export const database = new MemoryDB();