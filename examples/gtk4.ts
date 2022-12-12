// INCOMPLETE

import { ObjectInfo, Repository } from "../mod.ts";

const repo = Repository.get_default();
repo.require("Gtk", "4.0");
const application = repo.find_by_name("Gtk", "Application") as ObjectInfo;
console.log("type", application.type, application.name);
console.log("methods", application.n_methods);

const methods = application.n_methods;

const new_app = application.find_method("new");

if (!new_app) throw "can't find new method";

console.log("new app", new_app);
// new_app.auto_invoke(["org.gtk.example", 0]);

const signal = application.find_signal("activate");

if (!signal) throw "can't find activate signal";

signal;

for (let i = 0; i < methods; i++) {
  const fn = application.get_method(i);
  if (!fn) {
    console.log("no method");
    continue;
  }
  console.log("method", fn.name, fn.get_return_type());
}

// const n_infos = repo.get_n_infos("Gtk");
// console.log("n_infos", n_infos);
