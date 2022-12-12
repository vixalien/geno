import { CallableInfo } from "./callable.ts";
import { PropertyInfo } from "./property.ts";
import {
  Argument,
  c_girepository,
  GError,
  pointerToStr,
  reserve,
  strToPointer,
} from "./util.ts";

export class FunctionInfo extends CallableInfo {
  get_flags() {
    return c_girepository.symbols.g_function_info_get_flags(this.ptr);

    // TODO: return  FunctionInfoFlags.fromPointer(ptr);
  }

  get_property() {
    const ptr = c_girepository.symbols.g_function_info_get_property(this.ptr);

    return PropertyInfo.fromPointer(ptr);
  }

  get_symbol() {
    const ptr = c_girepository.symbols.g_function_info_get_symbol(this.ptr);

    return pointerToStr(ptr);
  }

  get_vfunc() {
    const ptr = c_girepository.symbols.g_function_info_get_vfunc(this.ptr);

    // TODO: return  VFuncInfo.fromPointer(ptr);
    return ptr;
  }

  /* invoke_error_quark */

  fn_auto_invoke(
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

    const result = this.fn_invoke(in_args_ptr, out_args_ptr);

    return {
      result,
      out_args: Array.from(out_args_ptr).map((arg) =>
        Argument.fromPointer(arg)
      ),
    };
  }

  fn_invoke(
    in_args: BigInt64Array,
    out_args: BigInt64Array | 0 = 0,
  ) {
    const return_value = Argument.fromPointer(reserve());
    const error = new BigUint64Array(1);

    const ret = c_girepository.symbols.g_function_info_invoke(
      this.ptr,
      Deno.UnsafePointer.of(in_args),
      in_args.length,
      out_args === 0 ? 0 : Deno.UnsafePointer.of(out_args),
      out_args === 0 ? 0 : out_args.length,
      return_value.ptr,
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
}

enum SingleFunctionInfoFlags {
  IS_METHOD,
  IS_CONSTRUCTOR,
  IS_GETTER,
  IS_SETTER,
  WRAPS_VFUNC,
  THROWS,
}

export type FunctionInfoFlags = SingleFunctionInfoFlags[];

export enum InvokeError {
  FAILED,
  SYMBOL_NOT_FOUND,
  ARGUMENT_MISMATCH,
}
