import { c_girepository } from "../lib/girepository.ts";
import { Argument } from "./argument.ts";
import { BaseInfo } from "./base.ts";

export class FieldInfo extends BaseInfo {
  get_field(mem: Deno.PointerValue, value: Argument) {
    return c_girepository.symbols.g_field_info_get_field(
      this.ptr,
      mem,
      value.ptr,
    );
  }

  set_field(mem: Deno.PointerValue, value: Argument) {
    return c_girepository.symbols.g_field_info_set_field(
      this.ptr,
      mem,
      value.ptr,
    );
  }

  get flags() {
    const ptr = c_girepository.symbols.g_field_info_get_flags(this.ptr);

    return ptr as FieldInfoFlags;
  }

  get offset() {
    return c_girepository.symbols.g_field_info_get_offset(this.ptr);
  }

  get size() {
    return c_girepository.symbols.g_field_info_get_size(this.ptr);
  }

  get field_type() {
    const ptr = c_girepository.symbols.g_field_info_get_type(this.ptr);

    // TODO: return TypeInfo.fromPointer(ptr);
    return ptr;
  }
}

export enum FieldInfoFlags {
  IS_READABLE = 1 << 0,
  IS_WRITABLE = 1 << 1,
}
