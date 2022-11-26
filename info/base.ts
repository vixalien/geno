import { c_girepository } from "../lib/girepository.ts";

import { PointerObj } from "../pointerobj.ts";
import { TypeLib } from "../typelib.ts";
import { pointerToStr, strToPointer } from "../util.ts";
import { AttributeIter } from "./attributeiter.ts";
import { info_type_to_string, InfoType } from "./infotype.ts";

export class BaseInfo extends PointerObj {
  new(
    type: InfoType,
    container: BaseInfo,
    typelib: TypeLib,
    offset: number,
  ) {
    const ptr = c_girepository.symbols.g_info_new(
      type,
      container.ptr,
      typelib.ptr,
      offset,
    );
    this.__unsafeSetPointer(ptr);
  }

  ref() {
    const ptr = c_girepository.symbols.g_base_info_ref(this.ptr);
    return BaseInfo.fromPointer(ptr);
  }

  unref() {
    c_girepository.symbols.g_base_info_unref(this.ptr);
  }

  equal(base_info: BaseInfo) {
    return c_girepository.symbols.g_base_info_equal(this.ptr, base_info.ptr);
  }

  get type() {
    return c_girepository.symbols.g_base_info_get_type(this.ptr) as InfoType;
  }

  get typelib() {
    const ptr = c_girepository.symbols.g_base_info_get_typelib(this.ptr);

    return TypeLib.fromPointer(ptr);
  }

  get namespace() {
    const ptr = c_girepository.symbols.g_base_info_get_namespace(this.ptr);

    return new Deno.UnsafePointerView(ptr).getCString();
  }

  get name() {
    const ptr = c_girepository.symbols.g_base_info_get_name(this.ptr);

    return new Deno.UnsafePointerView(ptr).getCString();
  }

  get_attribute(attribute: string) {
    const ptr = c_girepository.symbols.g_base_info_get_attribute(
      this.ptr,
      strToPointer(attribute),
    );

    return new Deno.UnsafePointerView(ptr).getCString();
  }

  foreach(callback: (name: string, value: string) => void) {
    const iter = AttributeIter.generate();
    const name = strToPointer("");
    const value = strToPointer("");
    while (
      c_girepository.symbols.g_base_info_iterate_attributes(
        this.ptr,
        iter.ptr,
        name,
        value,
      )
    ) {
      callback(
        pointerToStr(name),
        pointerToStr(value),
      );
    }
  }

  get_container() {
    const ptr = c_girepository.symbols.g_base_info_get_container(this.ptr);

    return BaseInfo.fromPointer(ptr);
  }

  is_deprecated() {
    return c_girepository.symbols.g_base_info_is_deprecated(this.ptr);
  }

  toString() {
    return info_type_to_string(this.type);
  }
}
