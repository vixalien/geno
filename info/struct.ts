import { c_girepository } from "../lib/girepository.ts";
import { strToPointer } from "../util.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";

export class StructInfo extends RegisteredTypeInfo {
  find_field(name: string) {
    const ptr = c_girepository.symbols.g_struct_info_find_field(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return FieldInfo.fromPointer(ptr);
    return ptr;
  }

  get alignment() {
    return c_girepository.symbols.g_struct_info_get_alignment(this.ptr);
  }

  get size() {
    return c_girepository.symbols.g_struct_info_get_size(this.ptr);
  }

  get is_gtype_struct() {
    return c_girepository.symbols.g_struct_info_is_gtype_struct(this.ptr);
  }

  get is_foreign() {
    return c_girepository.symbols.g_struct_info_is_foreign(this.ptr);
  }

  get n_fields() {
    return c_girepository.symbols.g_struct_info_get_n_fields(this.ptr);
  }

  get_field(n: number | bigint) {
    const ptr = c_girepository.symbols.g_struct_info_get_field(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FieldInfo.fromPointer(ptr);
    return ptr;
  }

  get n_methods() {
    return c_girepository.symbols.g_struct_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_struct_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_struct_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }
}
