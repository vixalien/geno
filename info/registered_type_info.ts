import { PointerObj } from "../pointerobj.ts";
import { c_girepository } from "../lib/girepository.ts";
import { pointerToStr } from "../util.ts";

export class RegisteredTypeInfo extends PointerObj {
  get type_name() {
    const ptr = c_girepository.symbols.g_registered_type_info_get_type_name(
      this.ptr,
    );

    return pointerToStr(ptr);
  }

  get type_init() {
    const ptr = c_girepository.symbols.g_registered_type_info_get_type_init(
      this.ptr,
    );

    return pointerToStr(ptr);
  }

  get g_type() {
    /* GType */
    const ptr = c_girepository.symbols.g_registered_type_info_get_g_type(
      this.ptr,
    );

    // TODO: return GType.fromPointer(ptr);

    return ptr;
  }
}
