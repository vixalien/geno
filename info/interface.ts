import { c_girepository } from "../lib/girepository.ts";
import { strToPointer } from "../util.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";

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

    // TODO: return BaseInfo.fromPointer(ptr);
    return ptr;
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

    // TODO: return PropertyInfo.fromPointer(ptr);
    return ptr;
  }

  get n_methods() {
    return c_girepository.symbols.g_interface_info_get_n_methods(this.ptr);
  }

  get_method(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_method(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  find_method(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_method(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  get n_signals() {
    return c_girepository.symbols.g_interface_info_get_n_signals(this.ptr);
  }

  get_signal(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_signal(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return SignalInfo.fromPointer(ptr);
    return ptr;
  }

  find_signal(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_signal(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return SignalInfo.fromPointer(ptr);
    return ptr;
  }

  get n_vfuncs() {
    return c_girepository.symbols.g_interface_info_get_n_vfuncs(this.ptr);
  }

  get_vfunc(n: number | bigint) {
    const ptr = c_girepository.symbols.g_interface_info_get_vfunc(this.ptr, n);

    if (ptr === 0) return null;

    // TODO: return VFuncInfo.fromPointer(ptr);
    return ptr;
  }

  find_vfunc(name: string) {
    const ptr = c_girepository.symbols.g_interface_info_find_vfunc(
      this.ptr,
      strToPointer(name),
    );

    if (ptr === 0) return null;

    // TODO: return VFuncInfo.fromPointer(ptr);
    return ptr;
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

    // TODO: return ConstantInfo.fromPointer(ptr);
    return ptr;
  }

  get iface_struct() {
    const ptr = c_girepository.symbols.g_interface_info_get_iface_struct(
      this.ptr,
    );

    if (ptr === 0) return null;

    // TODO: return StructInfo.fromPointer(ptr);
    return ptr;
  }
}
