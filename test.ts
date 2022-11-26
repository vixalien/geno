import { Repository } from "./repository.ts";
import { closeAll } from "./lib/close.ts";

const repo = Repository.get_default();
repo.require("Gtk", "4.0");
console.log("required repo", repo);
const n_infos = repo.get_n_infos("Gtk");
console.log("n_infos", n_infos);

const button = repo.get_info("Gtk", 71)!;

console.log("for button", button);
console.log("name", button.name);
console.log("namespace", button.namespace);
console.log("type", button.type);
console.log("to string", button.toString());
console.log("deprecated", button.is_deprecated());

// for (let i = 0; i < n_infos; i++) {
//   const info = repo.get_info("Gtk", i)?.name
//   console.log(`${i + 1}th info:`, repo.get_info("Gtk", i)?.name);
// }

await closeAll();
