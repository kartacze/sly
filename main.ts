import { getAll } from "./src/cli/getAll.ts";
import { put } from "./src/cli/put.ts";
import { initDB } from "./src/db/main.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

initDB();
await new Command()
  .name("sly")
  .version("0.0.1")
  .description("Command line tool for managing your budget")
  .command("put", put)
  .command("get", getAll)
  .parse(Deno.args);
