import { c_girepository } from "../lib/girepository.ts";
import { pointerToStr } from "../util.ts";
import { BaseInfo } from "./base.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";

export class EnumInfo extends RegisteredTypeInfo {
  get n_values() {
    return c_girepository.symbols.g_enum_info_get_n_values(this.ptr);
  }

  get_value(n: number | bigint) {
    const ptr = c_girepository.symbols.g_enum_info_get_value(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return ValueInfo.fromPointer(ptr);
    return ptr;
  }

  get n_methods() {
    return c_girepository.symbols.g_enum_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_enum_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  get storage_type() {
    const ptr = c_girepository.symbols.g_enum_info_get_storage_type(this.ptr);

    // TODO: return TypeTag.fromPointer(ptr);
    return ptr;
  }

  get error_domain() {
    const ptr = c_girepository.symbols.g_enum_info_get_error_domain(this.ptr);

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }
}

// TODO: upstream this
export class ValueInfo extends BaseInfo {
  get value() {
    return c_girepository.symbols.g_value_info_get_value(this.ptr);
  }
}
