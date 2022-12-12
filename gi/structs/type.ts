import { BaseInfo } from "./base.ts";
import { c_girepository } from "./util.ts";

export class TypeInfo extends BaseInfo {
  is_pointer() {
    return c_girepository.symbols.g_type_info_is_pointer(this.ptr);
  }

  get_tag() {
    const ptr = c_girepository.symbols.g_type_info_get_tag(this.ptr);

    return ptr;
    // TODO: return  TypeTag.fromPointer(ptr);
  }

  get_param_type(n: Deno.PointerValue) {
    const ptr = c_girepository.symbols.g_type_info_get_param_type(this.ptr, n);

    return TypeInfo.fromPointer(ptr);
  }

  get_interface() {
    const ptr = c_girepository.symbols.g_type_info_get_interface(this.ptr);

    if (!ptr) return null;

    return BaseInfo.fromPointer(ptr);
  }

  get_array_length() {
    return c_girepository.symbols.g_type_info_get_array_length(this.ptr);
  }

  get_array_fixed_size() {
    return c_girepository.symbols.g_type_info_get_array_fixed_size(this.ptr);
  }

  is_zero_terminated() {
    return c_girepository.symbols.g_type_info_is_zero_terminated(this.ptr);
  }

  get_array_type() {
    const ptr = c_girepository.symbols.g_type_info_get_array_type(this.ptr);

    return ptr;
    // TODO: return ArrayType.fromPointer(ptr);
  }
}
