// TODO: split this up when typescript 4.9 launches

export const c_girepository = Deno.dlopen("/usr/lib/libgirepository-1.0.so", {
  g_irepository_find_by_name: {
    parameters: [
      /* Repository */
      "pointer",
      /* namespace: string */
      "pointer",
      /* name: string */
      "pointer",
    ],
    /* BaseInfo */
    result: "pointer",
  },
  g_irepository_get_default: {
    parameters: [],
    result: "pointer",
  },
  g_irepository_require: {
    parameters: [
      /* Repository */
      "pointer",
      /* namespace: string */
      "pointer",
      /* version: string */
      "pointer",
      /* RepositoryLoadFlags */
      "pointer",
      /* Error */
      "pointer",
    ],
    /* TypeLib */
    result: "pointer",
  },
  g_irepository_get_n_infos: {
    parameters: [
      /* Repository */
      "pointer",
      /* namespace: string */
      "pointer",
    ],
    result: "isize",
  },
  g_irepository_get_info: {
    parameters: [
      /* Repository */
      "pointer",
      /* namespace: string */
      "pointer",
      /* index */
      "isize",
    ],
    /* BaseInfo */
    result: "pointer",
  },

  // BaseInfo
  g_info_new: {
    parameters: [
      /* InfoType */
      "usize",
      /* BaseInfo */
      "pointer",
      /* TypeLib */
      "pointer",
      "u32",
    ],
    /* BaseInfo */
    result: "pointer",
  },
  g_base_info_ref: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* BaseInfo */
    result: "pointer",
  },
  g_base_info_unref: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    result: "void",
  },
  g_base_info_equal: {
    parameters: [
      /* BaseInfo */
      "pointer",
      /* BaseInfo */
      "pointer",
    ],
    /* BaseInfo */
    result: "bool",
  },
  g_base_info_get_type: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* InfoType */
    result: "i16",
  },
  g_base_info_get_typelib: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* TypeLib */
    result: "pointer",
  },
  g_base_info_get_namespace: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* string */
    result: "pointer",
  },
  g_base_info_get_name: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* string */
    result: "pointer",
  },
  g_base_info_get_attribute: {
    parameters: [
      /* BaseInfo */
      "pointer",
      /* string */
      "pointer",
    ],
    /* string */
    result: "pointer",
  },
  g_base_info_iterate_attributes: {
    parameters: [
      /* BaseInfo */
      "pointer",
      /* AttributeIter */
      "pointer",
      /* out: name */
      "pointer",
      /* out: value */
      "pointer",
    ],
    result: "bool",
  },
  g_base_info_get_container: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    /* BaseInfo */
    result: "pointer",
  },
  g_base_info_is_deprecated: {
    parameters: [
      /* BaseInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_info_type_to_string: {
    parameters: [
      /* BaseInfo */
      "isize",
    ],
    /* string */
    result: "pointer",
  },

  // CallableInfo
  g_callable_info_can_throw_gerror: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_callable_info_get_n_args: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    result: "isize",
  },
  g_callable_info_get_arg: {
    parameters: [
      /* CallableInfo */
      "pointer",
      "isize",
    ],
    /* ArgInfo */
    result: "pointer",
  },
  g_callable_info_get_caller_owns: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    /* Transfer */
    result: "pointer",
  },
  g_callable_info_get_instance_ownership_transfer: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    /* Transfer */
    result: "pointer",
  },
  g_callable_info_get_return_attribute: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* string */
      "pointer",
    ],
    /* string */
    result: "pointer",
  },
  g_callable_info_get_return_type: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    /* TypeInfo */
    result: "pointer",
  },
  g_callable_info_invoke: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* gpointer */
      "pointer",
      /* const GIArgument */
      "pointer",
      "isize",
      /* const GIArgument */
      "pointer",
      "isize",
      /* GIArgument */
      "pointer",
      "bool",
      "bool",
      /* out: GError */
      "pointer",
    ],
    /* string */
    result: "bool",
  },
  g_callable_info_is_method: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_callable_info_iterate_return_attributes: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* AttributeIter */
      "pointer",
      /* out: name */
      "pointer",
      /* out: value */
      "pointer",
    ],
    result: "bool",
  },
  g_callable_info_load_arg: {
    parameters: [
      /* CallableInfo */
      "pointer",
      "isize",
      /* ArgInfo */
      "pointer",
    ],
    result: "void",
  },
  g_callable_info_load_return_type: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* TypeInfo */
      "pointer",
    ],
    result: "void",
  },
  g_callable_info_may_return_null: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_callable_info_skip_return: {
    parameters: [
      /* CallableInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_callable_info_create_closure: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* ffi_cif */
      "pointer",
      /* FFIClosureCallback */
      "pointer",
      /* user_data */
      "pointer",
    ],
    /* ffi_closure */
    result: "pointer",
  },
  g_callable_info_destroy_closure: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* ffi_closure */
      "pointer",
    ],
    result: "void",
  },
  g_callable_info_get_closure_native_address: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* ffi_closure */
      "pointer",
    ],
    /* pointer */
    result: "pointer",
  },

  /* ArgInfo */
  g_arg_info_get_closure: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "isize",
  },
  g_arg_info_get_destroy: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "isize",
  },
  g_arg_info_get_direction: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    /* Direction */
    result: "pointer",
  },
  g_arg_info_get_ownership_transfer: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    /* Transfer */
    result: "isize",
  },
  g_arg_info_get_scope: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    /* ScopeType */
    result: "isize",
  },
  g_arg_info_get_type: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    /* TypeInfo */
    result: "isize",
  },
  g_arg_info_load_type: {
    parameters: [
      /* ArgInfo */
      "pointer",
      /* TypeInfo */
      "pointer",
    ],
    result: "void",
  },
  g_arg_info_may_be_null: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_arg_info_is_caller_allocates: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_arg_info_is_optional: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_arg_info_is_return_value: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "bool",
  },
  g_arg_info_is_skip: {
    parameters: [
      /* ArgInfo */
      "pointer",
    ],
    result: "bool",
  },

  // Function
  g_function_info_get_flags: {
    parameters: [
      /* FunctionInfo */
      "pointer",
    ],
    /* FunctionInfoFlags */
    result: "pointer",
  },
  g_function_info_get_property: {
    parameters: [
      /* FunctionInfo */
      "pointer",
    ],
    /* PropertyInfo */
    result: "pointer",
  },
  g_function_info_get_symbol: {
    parameters: [
      /* FunctionInfo */
      "pointer",
    ],
    /* string */
    result: "pointer",
  },
  g_function_info_get_vfunc: {
    parameters: [
      /* FunctionInfo */
      "pointer",
    ],
    /* VFuncInfo */
    result: "pointer",
  },
  g_function_info_invoke: {
    parameters: [
      /* CallableInfo */
      "pointer",
      /* const GIArgument */
      "pointer",
      "isize",
      /* const GIArgument */
      "pointer",
      "isize",
      /* GIArgument */
      "pointer",
      /* out: GError */
      "pointer",
    ],
    /* string */
    result: "bool",
  },
  g_invoke_error_quark: {
    parameters: [],
    /* GQuark */
    result: "pointer",
  },
});
