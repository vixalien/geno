import { BaseInfo } from "./base.ts";
import { Transfer } from "./arg.ts";
import { c_girepository } from "./util.ts";

export class PropertyInfo extends BaseInfo {
  get_flags() {
    const ptr = c_girepository.symbols.g_property_info_get_flags(this.ptr);

    return ptr as ParamFlags;
  }

  get_ownership_transfer() {
    const ptr = c_girepository.symbols.g_property_info_get_ownership_transfer(
      this.ptr,
    );

    return ptr as Transfer;
  }

  get_type() {
    const ptr = c_girepository.symbols.g_property_info_get_type(this.ptr);

    // TODO: return TypeInfo.fromPointer(ptr)
    return ptr;
  }

  get_getter() {
    const ptr = c_girepository.symbols.g_property_info_get_getter(this.ptr);

    // TODO: return FunctionInfo.fromPointer(ptr)
    return ptr;
  }

  get_setter() {
    const ptr = c_girepository.symbols.g_property_info_get_setter(this.ptr);

    // TODO: return FunctionInfo.fromPointer(ptr)
    return ptr;
  }
}

export enum ParamFlags {
  G_PARAM_READABLE = 1 << 0,
  G_PARAM_WRITABLE = 1 << 1,
  G_PARAM_READWRITE = (G_PARAM_READABLE | G_PARAM_WRITABLE),
  G_PARAM_CONSTRUCT = 1 << 2,
  G_PARAM_CONSTRUCT_ONLY = 1 << 3,
  G_PARAM_LAX_VALIDATION = 1 << 4,
  G_PARAM_STATIC_NAME = 1 << 5,
  // G_PARAM_PRIVATE GLIB_DEPRECATED_ENUMERATOR_IN_2_26 = G_PARAM_STATIC_NAME,
  G_PARAM_STATIC_NICK = 1 << 6,
  G_PARAM_STATIC_BLURB = 1 << 7,
  /* User defined flags go here */
  G_PARAM_EXPLICIT_NOTIFY = 1 << 30,
  /* Avoid warning with -Wpedantic for gcc6 */
  G_PARAM_DEPRECATED = -(1 << 31),
}
