import { c_error } from "../lib/structs.ts";
import { PointerObj } from "../pointerobj.ts";

export class AttributeIter extends PointerObj {
  static generate() {
    const arr = new BigInt64Array(1);
    c_error.symbols.gi_attribute_iter_new(Deno.UnsafePointer.of(arr));

    return this.fromPointer(arr[0]);
  }
}
