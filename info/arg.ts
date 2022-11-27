import { c_girepository } from "../lib/girepository.ts";
import { BaseInfo } from "./base.ts";

export enum Direction {
  IN,
  OUT,
  INOUT,
}

export enum ScopeType {
  INVALID,
  CALL,
  ASYNC,
  NOTIFIED,
  FOREVER,
}

export enum Transfer {
  NOTHING,
  CONTAINER,
  EVERYTHING,
}

export class ArgInfo extends BaseInfo {
  get_closure() {
    const ptr = c_girepository.symbols.g_arg_info_get_closure(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32();
  }

  get_destroy() {
    const ptr = c_girepository.symbols.g_arg_info_get_destroy(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32();
  }

  get_direction() {
    const ptr = c_girepository.symbols.g_arg_info_get_direction(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32() as Direction;
  }

  get_ownership_transfer() {
    const ptr = c_girepository.symbols.g_arg_info_get_ownership_transfer(
      this.ptr,
    );

    return new Deno.UnsafePointerView(ptr).getInt32() as Transfer;
  }

  get_scope() {
    const ptr = c_girepository.symbols.g_arg_info_get_scope(this.ptr);

    return new Deno.UnsafePointerView(ptr).getInt32() as ScopeType;
  }

  get_type() {
    const ptr = c_girepository.symbols.g_arg_info_get_type(this.ptr);

    // TODO: return TypeInfo.fromPointer(ptr)
    return ptr;
  }

  load_type() {
    const type = 0;
    /* const ptr = */ c_girepository.symbols.g_arg_info_get_scope(
      this.ptr,
      type,
    );

    // TODO: return TypeInfo.fromPointer(ptr)
    return type;
  }

  may_be_null() {
    const ptr = c_girepository.symbols.g_arg_info_may_be_null(this.ptr);

    return ptr;
  }

  is_caller_allocates() {
    const ptr = c_girepository.symbols.g_arg_info_is_caller_allocates(this.ptr);

    return ptr;
  }

  is_optional() {
    const ptr = c_girepository.symbols.g_arg_info_is_optional(this.ptr);

    return ptr;
  }

  is_return_value() {
    const ptr = c_girepository.symbols.g_arg_info_is_return_value(this.ptr);

    return ptr;
  }

  is_skip() {
    const ptr = c_girepository.symbols.g_arg_info_is_skip(this.ptr);

    return ptr;
  }
}
