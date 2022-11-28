import { c_girepository } from "../lib/girepository.ts";
import { strToPointer } from "../util.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";

export class UnionInfo extends RegisteredTypeInfo {
  get n_fields() {
    return c_girepository.symbols.g_union_info_get_n_fields(this.ptr);
  }

  get_field(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_field(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FieldInfo.fromPointer(ptr);
    return ptr;
  }

  get n_methods() {
    return c_girepository.symbols.g_union_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
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

    // TODO: return TypeInfo.fromPointer(ptr);
    return ptr;
  }

  get_discriminatior(n: number | bigint) {
    const ptr = c_girepository.symbols.g_union_info_get_discriminator(
      this.ptr,
      n,
    );

    if (ptr === 0) return null;

    // TODO: return ConstantInfo.fromPointer(ptr);
    return ptr;
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_union_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  get size() {
    return c_girepository.symbols.g_union_info_get_size(this.ptr);
  }

  get alignment() {
    return c_girepository.symbols.g_union_info_get_alignment(this.ptr);
  }
}
