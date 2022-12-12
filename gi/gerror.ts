import { PointerObj } from "./pointerobj.ts";

import { c_ccputil } from "../util/ffi/cpputil.ts";

export class GError extends PointerObj {
  constructor(pointer: Deno.PointerValue) {
    super();
    this.__unsafeSetPointer(pointer);
  }

  get message() {
    console.log("ptr", this.ptr);
    const ptr = c_ccputil.symbols.g_error_get_message(this.ptr);

    if (ptr === 0) return null;

    return new Deno.UnsafePointerView(ptr).getCString();
  }

  get code() {
    return c_ccputil.symbols.g_error_get_code(this.ptr);
  }

  toError() {
    const error = new Error(this.message ?? "GError", {
      cause: this.code,
    });
    return error;
  }
}
