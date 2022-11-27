import { c_girepository } from "../lib/girepository.ts";
import { Argument } from "./argument.ts";
import { BaseInfo } from "./base.ts";

export class ConstantInfo extends BaseInfo {
  free_value(value: Argument) {
    c_girepository.symbols.g_constant_info_free_value(this.ptr, value.ptr);
  }

  // if named "type" it will conflict with BaseInfo.type
  get constant_type() {
    const ptr = c_girepository.symbols.g_constant_info_get_type(this.ptr);

    // TODO: return TypeInfo.fromPointer(ptr);
    return ptr;
  }

  get_value(value: Argument) {
    return c_girepository.symbols.g_constant_info_get_value(
      this.ptr,
      value.ptr,
    ) as number;
  }
}
