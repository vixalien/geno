import { ConstantInfo } from "./constant.ts";
import { FieldInfo } from "./field.ts";
import { FunctionInfo } from "./function.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";
import { TypeInfo } from "./type.ts";
import { c_girepository, strToPointer } from "./util.ts";

export class UnionInfo extends RegisteredTypeInfo {
  get n_fields() {
    return c_girepository.symbols.g_union_info_get_n_fields(this.ptr);
  }

  get_field(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_field(this.ptr, n);

    if (ptr === 0) return null;

    return FieldInfo.fromPointer(ptr);
  }

  get n_methods() {
    return c_girepository.symbols.g_union_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  get is_discriminated() {
    return c_girepository.symbols.g_union_info_is_discriminated(this.ptr);
  }

  get discriminator_offset() {
    return c_girepository.symbols.g_union_info_get_discriminator_offset(
      this.ptr,
    );
  }

  get discriminator_type() {
    const ptr = c_girepository.symbols.g_union_info_get_discriminator_type(
      this.ptr,
    );

    if (ptr === 0) return null;

    return TypeInfo.fromPointer(ptr);
  }

  get_discriminatior(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_discriminator(
      this.ptr,
      n,
    );

    if (ptr === 0) return null;

    return ConstantInfo.fromPointer(ptr);
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_union_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  get size() {
    return c_girepository.symbols.g_union_info_get_size(this.ptr);
  }

  get alignment() {
    return c_girepository.symbols.g_union_info_get_alignment(this.ptr);
  }
}
