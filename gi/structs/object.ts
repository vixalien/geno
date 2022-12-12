import { ConstantInfo } from "./constant.ts";
import { FieldInfo } from "./field.ts";
import { FunctionInfo } from "./function.ts";
import { InterfaceInfo } from "./interface.ts";
import { PropertyInfo } from "./property.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";
import { SignalInfo } from "./signal.ts";
import { c_girepository, pointerToStr, strToPointer } from "./util.ts";

export class ObjectInfo extends RegisteredTypeInfo {
  get abstract() {
    return c_girepository.symbols.g_object_info_get_abstract(this.ptr);
  }

  get fundamental() {
    return c_girepository.symbols.g_object_info_get_fundamental(this.ptr);
  }

  get final() {
    return c_girepository.symbols.g_object_info_get_final(this.ptr);
  }

  get parent() {
    const ptr = c_girepository.symbols.g_object_info_get_parent(this.ptr);

    return ObjectInfo.fromPointer(ptr);
  }

  get type_name() {
    const ptr = c_girepository.symbols.g_object_info_get_type_name(this.ptr);

    return pointerToStr(ptr);
  }

  get type_init() {
    const ptr = c_girepository.symbols.g_object_info_get_type_init(this.ptr);

    return pointerToStr(ptr);
  }

  get n_constants() {
    return c_girepository.symbols.g_object_info_get_n_constants(this.ptr);
  }

  get_constant(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_constant(this.ptr, n);

    if (ptr === 0) return null;

    return ConstantInfo.fromPointer(ptr);
  }

  get n_fields() {
    return c_girepository.symbols.g_object_info_get_n_fields(this.ptr);
  }

  get_field(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_field(this.ptr, n);

    if (ptr === 0) return null;

    return FieldInfo.fromPointer(ptr);
  }

  get n_interfaces() {
    return c_girepository.symbols.g_object_info_get_n_interfaces(this.ptr);
  }

  get_interface(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_interface(this.ptr, n);

    if (ptr === 0) return null;

    return InterfaceInfo.fromPointer(ptr);
  }

  get n_methods() {
    return c_girepository.symbols.g_object_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_object_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  // TODO: use implementor: GIObjectInfo
  find_method_using_interfaces(name: string, implementor: Deno.PointerValue) {
    const ptr = c_girepository.symbols
      .g_object_info_find_method_using_interfaces(
        this.ptr,
        strToPointer(name),
        implementor,
      );

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  get n_properties() {
    return c_girepository.symbols.g_object_info_get_n_properties(this.ptr);
  }

  get_property(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_property(this.ptr, n);

    return PropertyInfo.fromPointer(ptr);
  }

  get n_signals() {
    return c_girepository.symbols.g_object_info_get_n_signals(this.ptr);
  }

  get_signal(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_signal(this.ptr, n);

    if (ptr === 0) return null;

    return SignalInfo.fromPointer(ptr);
  }

  find_signal(name: string) {
    const ptr = c_girepository.symbols.g_object_info_find_signal(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return SignalInfo.fromPointer(ptr);
  }

  get n_vfuncs() {
    return c_girepository.symbols.g_object_info_get_n_vfuncs(this.ptr);
  }

  get_vfunc(n: number | bigint) {
    const ptr = c_girepository.symbols.g_object_info_get_vfunc(this.ptr, n);

    if (ptr === 0) return null;

    return ptr;
    // TODO: return  VFuncInfo.fromPointer(ptr);;
  }

  find_vfunc(name: string) {
    const ptr = c_girepository.symbols.g_object_info_find_vfunc(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return ptr;
    // TODO: return  VFuncInfo.fromPointer(ptr);;
  }

  // TODO: use implementor: GIObjectInfo
  find_vfunc_using_interfaces(name: string, implementor: Deno.PointerValue) {
    const ptr = c_girepository.symbols
      .g_object_info_find_vfunc_using_interfaces(
        this.ptr,
        strToPointer(name),
        implementor,
      );

    if (ptr === 0) return null;

    return ptr;
    // TODO: return  VFuncInfo.fromPointer(ptr);;
  }

  get class_struct() {
    const ptr = c_girepository.symbols.g_object_info_get_class_struct(this.ptr);

    if (ptr === 0) return null;

    return ptr;
    // TODO: return  StructInfo.fromPointer(ptr);;
  }

  get ref_function() {
    const ptr = c_girepository.symbols.g_object_info_get_ref_function(this.ptr);

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }

  get ref_function_pointer() {
    const ptr = c_girepository.symbols.g_object_info_get_ref_function_pointer(
      this.ptr,
    );

    if (ptr === 0) return null;

    const fn = new Deno.UnsafeFnPointer(ptr, RefFunction);

    return () => {
      const result = fn.call(this.ptr);

      return ObjectInfo.fromPointer(result);
    };
  }

  get unref_function() {
    const ptr = c_girepository.symbols.g_object_info_get_unref_function(
      this.ptr,
    );

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }

  get unref_function_pointer() {
    const ptr = c_girepository.symbols.g_object_info_get_unref_function_pointer(
      this.ptr,
    );

    if (ptr === 0) return null;

    const fn = new Deno.UnsafeFnPointer(ptr, UnRefFunction);

    return () => {
      fn.call(this.ptr);
    };
  }

  get set_value_function() {
    const ptr = c_girepository.symbols.g_object_info_get_set_value_function(
      this.ptr,
    );

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }

  get set_value_function_pointer() {
    const ptr = c_girepository.symbols
      .g_object_info_get_set_value_function_pointer(this.ptr);

    if (ptr === 0) return null;

    const fn = new Deno.UnsafeFnPointer(ptr, SetValueFunction);

    // TODO: value: GValue
    return (value: Deno.PointerValue) => {
      fn.call(value, this.ptr);
    };
  }

  get get_value_function() {
    const ptr = c_girepository.symbols.g_object_info_get_get_value_function(
      this.ptr,
    );

    if (ptr === 0) return null;

    return pointerToStr(ptr);
  }

  get get_value_function_pointer() {
    const ptr = c_girepository.symbols
      .g_object_info_get_get_value_function_pointer(this.ptr);

    if (ptr === 0) return null;

    const fn = new Deno.UnsafeFnPointer(ptr, GetValueFunction);

    // TODO: value: GValue
    return (value: Deno.PointerValue) => {
      const result = fn.call(value);

      return ObjectInfo.fromPointer(result);
    };
  }
}

// ObjectInfoRefFunction
export const RefFunction = {
  parameters: [
    /* ObjectInfo */
    "pointer",
  ],
  /* ObjectInfo */
  result: "pointer",
} as const;

export const UnRefFunction = {
  parameters: [
    /* ObjectInfo */
    "pointer",
  ],
  result: "void",
} as const;

export const SetValueFunction = {
  parameters: [
    /* GValue */
    "pointer",
    /* ObjectInfo */
    "pointer",
  ],
  result: "void",
} as const;

export const GetValueFunction = {
  parameters: [
    /* GValue */
    "pointer",
  ],
  /* ObjectInfo */
  result: "pointer",
} as const;
