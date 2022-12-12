import { c_girepository, pointerToStr, reserve, strToPointer } from "./util.ts";
import { AttributeIter } from "./base.ts";
import { ArgInfo, Transfer } from "./arg.ts";

import { BaseInfo } from "./base.ts";
import { TypeInfo } from "./type.ts";

export class CallableInfo extends BaseInfo {
  can_throw_gerror() {
    return c_girepository.symbols.g_callable_info_can_throw_gerror(this.ptr);
  }

  get_n_args() {
    const ptr = c_girepository.symbols.g_callable_info_get_n_args(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32();
  }

  get_arg(n: number | bigint) {
    const ptr = c_girepository.symbols.g_callable_info_get_arg(this.ptr, n);

    if (!ptr) return null;

    return ArgInfo.fromPointer(ptr);
  }

  get_caller_owns() {
    const ptr = c_girepository.symbols.g_callable_info_get_caller_owns(
      this.ptr,
    );

    return new Deno.UnsafePointerView(ptr).getInt32() as Transfer;
  }

  get_instance_ownership_transfer() {
    const ptr = c_girepository.symbols
      .g_callable_info_get_instance_ownership_transfer(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32() as Transfer;
  }

  get_return_attribute(name: string) {
    const ptr = c_girepository.symbols.g_callable_info_get_return_attribute(
      this.ptr,
      strToPointer(name),
    );

    return pointerToStr(ptr);
  }

  get_return_type() {
    const ptr = c_girepository.symbols.g_callable_info_get_return_type(
      this.ptr,
    );

    return TypeInfo.fromPointer(ptr);
  }

  /*
  invoke(function: Deno.PointerValue, ) {
    return c_girepository.symbols.g_callable_info_invoke(this.ptr);
  }
  */

  is_method() {
    return c_girepository.symbols.g_callable_info_is_method(this.ptr);
  }

  iterate_return_attributes(callback: (name: string, value: string) => void) {
    const iter = AttributeIter.generate();
    const name = new BigInt64Array(1);
    const value = new BigInt64Array(1);

    while (
      c_girepository.symbols.g_callable_info_iterate_return_attributes(
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

  load_arg(n: number | bigint) {
    const arg = reserve();
    c_girepository.symbols.g_callable_info_load_arg(this.ptr, n, arg);

    if (!arg) return null;

    return ArgInfo.fromPointer(arg);
  }

  load_return_type() {
    const arg = reserve();
    c_girepository.symbols.g_callable_info_load_return_type(this.ptr, arg);

    return ArgInfo.fromPointer(arg);
  }

  may_return_null() {
    return c_girepository.symbols.g_callable_info_may_return_null(this.ptr);
  }

  skip_return() {
    return c_girepository.symbols.g_callable_info_skip_return(this.ptr);
  }

  /* TODO:
  create_closure() {
    return c_girepository.symbols.g_callable_info_create_closure(this.ptr);
  }
  */

  /* TODO:
  destroy_closure() {
    return c_girepository.symbols.g_callable_info_create_closure(this.ptr);
  }
  */

  /* TODO:
  get_closure_native_address() {
    return c_girepository.symbols.g_callable_info_create_closure(this.ptr);
  }
  */
}
