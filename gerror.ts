import { PointerObj } from "./pointerobj.ts";

import { c_error } from "./lib/structs.ts";

export class GError extends PointerObj {
  constructor(pointer: Deno.PointerValue) {
    super(pointer);
  }

  get message() {
    const ptr = c_error.symbols.g_error_get_message(this.ptr);

    if (ptr === 0) return null;

    return new Deno.UnsafePointerView(ptr).getCString();
  }

  get code() {
    const ptr = c_error.symbols.g_error_get_code();

    if (ptr === 0) return null;

    return new Deno.UnsafePointerView(ptr).getInt32();
  }

  toError() {
    const error = new Error(this.message ?? "GError", {
      cause: this.code,
    });
    return error;
  }
}
