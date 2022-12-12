import {
  Argument,
  c_girepository,
  GError,
  pointerToStr,
  reserve,
  strToPointer,
} from "./util.ts";
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

  auto_invoke(
    function_ptr: Deno.PointerValue,
    in_args: (string | number | bigint | boolean)[],
    out_arg_n = 0,
  ) {
    const in_args_ptr = new BigInt64Array(in_args.length);
    const out_args_ptr = new BigInt64Array(out_arg_n);

    for (let i = 0; i < in_args.length; i++) {
      const argument = in_args[i];
      const arg = Argument.fromPointer(reserve());
      switch (typeof argument) {
        case "string":
          arg.v_pointer = strToPointer(argument);
          break;
        case "number":
          arg.v_pointer = argument;
          break;
        case "bigint":
          arg.v_pointer = BigInt(argument);
          break;
        case "boolean":
          arg.v_boolean = argument;
          break;
      }
      in_args_ptr[i] = BigInt(arg.v_pointer);
    }

    const result = this.invoke(function_ptr, in_args_ptr, out_args_ptr);

    return {
      result,
      out_args: Array.from(out_args_ptr).map((arg) =>
        Argument.fromPointer(arg)
      ),
    };
  }

  is_method() {
    return c_girepository.symbols.g_callable_info_is_method(this.ptr);
  }

  invoke(
    function_ptr: Deno.PointerValue,
    in_args: BigInt64Array,
    out_args: BigInt64Array | 0 = 0,
  ) {
    const return_value = Argument.fromPointer(reserve());
    const error = new BigUint64Array(1);

    const ret = c_girepository.symbols.g_callable_info_invoke(
      this.ptr,
      function_ptr,
      Deno.UnsafePointer.of(in_args),
      in_args.length,
      out_args === 0 ? 0 : Deno.UnsafePointer.of(out_args),
      out_args === 0 ? 0 : out_args.length,
      return_value.ptr,
      this.is_method(),
      this.can_throw_gerror(),
      Deno.UnsafePointer.of(error),
    );

    if (error[0] !== 0n) {
      const gerror = new GError(error[0]);
      throw gerror.toError();
    } else if (!ret) {
      throw new Error("function has not been executed");
    }

    // TODO: return FunctionInfoFlags.fromPointer(ptr)
    return return_value;
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
