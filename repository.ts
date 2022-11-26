import { PointerObj } from "./pointerobj.ts";
import { strToPointer } from "./util.ts";

import { BaseInfo } from "./info/base.ts";
import { TypeLib } from "./typelib.ts";
import { GError } from "./gerror.ts";
import { c_girepository } from "./lib/girepository.ts";

export class Repository extends PointerObj {
  constructor(pointer: Deno.PointerValue) {
    super(pointer);
  }

  require(namespace: string, version: string) {
    const error = Deno.UnsafePointer.of(new ArrayBuffer(0));

    const type_lib = c_girepository.symbols.g_irepository_require(
      this.ptr,
      strToPointer(namespace),
      strToPointer(version),
      0,
      error,
    );

    if (type_lib == 0) return null;

    if (error) {
      const gerror = new GError(error);
      throw gerror.toError();
    }

    return new TypeLib(type_lib);
  }

  find_by_name(namespace: string, name: string) {
    const base_info = c_girepository.symbols.g_irepository_find_by_name(
      this.ptr,
      strToPointer(namespace),
      strToPointer(name),
    );

    return new BaseInfo(base_info);
  }

  get_n_infos(namespace: string) {
    const n_info = c_girepository.symbols.g_irepository_get_n_infos(
      this.ptr,
      strToPointer(namespace),
    );

    return n_info;
  }

  get_info(namespace: string, index: number) {
    const base_info = c_girepository.symbols.g_irepository_get_info(
      this.ptr,
      strToPointer(namespace),
      index,
    );

    if (base_info == 0) return null;

    return new BaseInfo(base_info);
  }

  static get_default() {
    return new this(
      c_girepository.symbols.g_irepository_get_default(),
    );
  }
}
