import { FunctionInfo } from "./function.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";
import { c_girepository, pointerToStr, TypeTag } from "./util.ts";
import { ValueInfo } from "./value.ts";

export class EnumInfo extends RegisteredTypeInfo {
  get n_values() {
    return c_girepository.symbols.g_enum_info_get_n_values(this.ptr);
  }

  get_value(n: number | bigint) {
    const ptr = c_girepository.symbols.g_enum_info_get_value(this.ptr, n);

    if (ptr === 0) return null;

    return ValueInfo.fromPointer(ptr);
  }

  get n_methods() {
    return c_girepository.symbols.g_enum_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_enum_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  get storage_type() {
    return c_girepository.symbols.g_enum_info_get_storage_type(
      this.ptr,
    ) as TypeTag;
  }

  get error_domain() {
    const ptr = c_girepository.symbols.g_enum_info_get_error_domain(this.ptr);

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }
}
