import { c_girepository } from "../lib/girepository.ts";
import { c_error } from "../lib/structs.ts";

import { PointerObj } from "../pointerobj.ts";
import { TypeLib } from "../typelib.ts";
import { pointerToStr, strToPointer } from "../util.ts";

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

  iterate_attributes(callback: (name: string, value: string) => void) {
    const iter = AttributeIter.generate();
    const name = new BigInt64Array(1);
    const value = new BigInt64Array(1);
    while (
      c_girepository.symbols.g_base_info_iterate_attributes(
        this.ptr,
        iter.ptr,
        Deno.UnsafePointer.of(name),
        Deno.UnsafePointer.of(value),
      )
    ) {
      callback(
        pointerToStr(name[0]),
        pointerToStr(value[0]),
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

export class AttributeIter extends PointerObj {
  static generate() {
    const arr = new BigInt64Array(1);
    c_error.symbols.gi_attribute_iter_new(Deno.UnsafePointer.of(arr));

    return this.fromPointer(arr[0]);
  }
}

export enum InfoType {
  INVALID,
  FUNCTION,
  CALLBACK,
  STRUCT,
  BOXED,
  ENUM, /*  5 */
  FLAGS,
  OBJECT,
  INTERFACE,
  CONSTANT,
  INVALID_0, /* 10 */
  UNION,
  VALUE,
  SIGNAL,
  VFUNC,
  PROPERTY, /* 15 */
  FIELD,
  ARG,
  TYPE,
  UNRESOLVED,
}

export const info_type_to_string = (type: InfoType) => {
  const ptr = c_girepository.symbols.g_info_type_to_string(type);

  return pointerToStr(ptr);
};
