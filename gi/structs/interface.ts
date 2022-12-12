import { BaseInfo } from "./base.ts";
import { ConstantInfo } from "./constant.ts";
import { FunctionInfo } from "./function.ts";
import { PropertyInfo } from "./property.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";
import { SignalInfo } from "./signal.ts";
import { StructInfo } from "./struct.ts";
import { c_girepository, strToPointer } from "./util.ts";

export class InterfaceInfo extends RegisteredTypeInfo {
  get n_prerequisites() {
    return c_girepository.symbols.g_interface_info_get_n_prerequisites(
      this.ptr,
    );
  }

  get_prerequisite(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_prerequisite(
      this.ptr,
      n,
    );

    if (ptr === 0) return null;

    return BaseInfo.fromPointer(ptr);
  }

  get n_properties() {
    return c_girepository.symbols.g_interface_info_get_n_properties(this.ptr);
  }

  get_property(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_property(
      this.ptr,
      n,
    );

    if (ptr === 0) return null;

    return PropertyInfo.fromPointer(ptr);
  }

  get n_methods() {
    return c_girepository.symbols.g_interface_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return FunctionInfo.fromPointer(ptr);
  }

  get n_signals() {
    return c_girepository.symbols.g_interface_info_get_n_signals(this.ptr);
  }

  get_signal(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_signal(this.ptr, n);

    if (ptr === 0) return null;

    return SignalInfo.fromPointer(ptr);
  }

  find_signal(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_signal(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return SignalInfo.fromPointer(ptr);
  }

  get n_vfuncs() {
    return c_girepository.symbols.g_interface_info_get_n_vfuncs(this.ptr);
  }

  get_vfunc(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_vfunc(this.ptr, n);

    if (ptr === 0) return null;

    return ptr;
    // TODO: return VFuncInfo.fromPointer(ptr);
  }

  find_vfunc(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_vfunc(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    return ptr;
    // TODO: return VFuncInfo.fromPointer(ptr);
  }

  get n_constants() {
    return c_girepository.symbols.g_interface_info_get_n_constants(this.ptr);
  }

  get_constant(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_constant(
      this.ptr,
      n,
    );

    if (ptr === 0) return null;

    return ConstantInfo.fromPointer(ptr);
  }

  get iface_struct() {
    const ptr = c_girepository.symbols.g_interface_info_get_iface_struct(
      this.ptr,
    );

    if (ptr === 0) return null;

    return StructInfo.fromPointer(ptr);
  }
}
