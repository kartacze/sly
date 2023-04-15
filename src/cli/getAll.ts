import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { getAllPeople } from "../db/main.ts";

export const getAll = new Command()
  .description("get all users in database")
  .action(() => {
    console.log(getAllPeople());
  });
