import { BaseInfo } from "./structs/mod.ts";
import {
  c_girepository,
  GError,
  PointerObj,
  strToPointer,
  TypeLib,
} from "./structs/util.ts";

export class Repository extends PointerObj {
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

    return TypeLib.fromPointer(type_lib);
  }

  find_by_name(namespace: string, name: string) {
    const base_info = c_girepository.symbols.g_irepository_find_by_name(
      this.ptr,
      strToPointer(namespace),
      strToPointer(name),
    );

    return BaseInfo.castedFromPointer(base_info);
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

    return BaseInfo.fromPointer(base_info);
  }

  static get_default() {
    return this.fromPointer(
      c_girepository.symbols.g_irepository_get_default(),
    );
  }
}
