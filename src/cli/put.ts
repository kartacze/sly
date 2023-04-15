import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { insertPerson } from "../db/main.ts";

export const put = new Command()
  .arguments("<name:string> <surname:string>")
  .description("put new user to database")
  .action((_: unknown, name: string, surname: string) => {
    insertPerson(name, surname);
  });
