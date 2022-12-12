import {
  Argument,
  closeAll,
  FunctionInfo,
  pointerToStr,
  Repository,
  reserve,
  strToPointer,
} from "../mod.ts";

const repo = Repository.get_default();
repo.require("GLib", "2.0");
const base_info = repo.find_by_name("GLib", "ascii_strup");
const function_info = FunctionInfo.fromPointer(base_info.ptr);

const args = new BigInt64Array(2);

const arg1 = Argument.fromPointer(reserve());
arg1.v_pointer = strToPointer("hello");
args[0] = BigInt(arg1.v_pointer);

const arg2 = Argument.fromPointer(reserve());
arg2.v_pointer = 5;
args[1] = BigInt(arg2.v_pointer);

const ret = function_info.fn_invoke(args);

console.log("returned", pointerToStr(ret.v_pointer), "bytes");

const ret2 = function_info.fn_auto_invoke(["hello", 5]);

console.log("returned", pointerToStr(ret2.result.v_pointer), "bytes");

await closeAll();
