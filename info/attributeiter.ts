import { c_error } from "../lib/structs.ts";
import { PointerObj } from "../pointerobj.ts";

export class AttributeIter extends PointerObj {
  static generate() {
    const ptr = c_error.symbols.gi_attribute_iter_new();

    return new this(ptr);
  }
}
