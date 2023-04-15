import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";
import { join } from "https://deno.land/std@0.183.0/path/mod.ts";
import { Row } from "https://deno.land/x/sqlite@v3.7.0/src/query.ts";

const HOME_DIRECTORY = "/tmp";
const CLI_STATE_DIRECTORY = join(HOME_DIRECTORY, "deno-cli-example");

// the CLI will need read and write access to /tmp/deno-cli-example directory
await Deno.mkdir(CLI_STATE_DIRECTORY, { recursive: true });
const MAIN_DB_FILE = join(CLI_STATE_DIRECTORY, "state.sqlite");

export const initDB = () => {
  const db = new DB(MAIN_DB_FILE); // or new DB()
  try {
    db.execute(`
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )`);
  } finally {
    db.close();
  }
};

export const insertPerson = (name: string, surname: string) => {
  const db = new DB(MAIN_DB_FILE); // or new DB()

  try {
    db.query("INSERT INTO people (name) VALUES (?)", [name + surname]);
  } finally {
    db.close();
  }
};

export const getAllPeople = (): Row[] => {
  const db = new DB(MAIN_DB_FILE); // or new DB()

  try {
    return db.query("SELECT name FROM people");
  } finally {
    db.close();
  }
};
