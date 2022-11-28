// TODO: split this up when typescript 4.9 launches

export const c_girepository = Deno.dlopen(
  "/usr/lib/libgirepository-1.0.so",
  {
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

    // RegisteredTypeInfo
    g_registered_type_info_get_type_name: {
      parameters: [
        /* RegisteredTypeInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_registered_type_info_get_type_init: {
      parameters: [
        /* RegisteredTypeInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_registered_type_info_get_g_type: {
      parameters: [
        /* RegisteredTypeInfo */
        "pointer",
      ],
      /* GType */
      result: "pointer",
    },

    // ObjectInfo
    g_object_info_get_abstract: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "bool",
    },
    g_object_info_get_fundamental: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "bool",
    },
    g_object_info_get_final: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "bool",
    },
    g_object_info_get_parent: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* ObjectInfo */
      result: "pointer",
    },
    g_object_info_get_type_name: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_type_init: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_n_constants: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_constant: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* ConstantInfo */
      result: "pointer",
    },
    g_object_info_get_n_fields: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_field: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* FieldInfo */
      result: "pointer",
    },
    g_object_info_get_n_interfaces: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_interface: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* InterfaceInfo */
      result: "pointer",
    },
    g_object_info_get_n_methods: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_method: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* FunctionInfo */
      result: "pointer",
    },
    g_object_info_find_method: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        /* string */
        "pointer",
      ],
      /* FunctionInfo */
      result: "pointer",
    },
    g_object_info_find_method_using_interfaces: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        /* string */
        "pointer",
        /* out: ObjectInfo */
        "pointer",
      ],
      /* FunctionInfo */
      result: "pointer",
    },

    g_object_info_get_n_properties: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_property: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* PropertyInfo */
      result: "pointer",
    },
    g_object_info_get_n_signals: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_signal: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* SignalInfo */
      result: "pointer",
    },
    g_object_info_find_signal: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        /* string */
        "pointer",
      ],
      /* SignalInfo */
      result: "pointer",
    },
    g_object_info_get_n_vfuncs: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_object_info_get_vfunc: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        "isize",
      ],
      /* VFuncInfo */
      result: "pointer",
    },
    g_object_info_find_vfunc: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        /* string */
        "pointer",
      ],
      /* VFuncInfo */
      result: "pointer",
    },
    g_object_info_find_vfunc_using_interfaces: {
      parameters: [
        /* ObjectInfo */
        "pointer",
        /* string */
        "pointer",
        /* ObjectInfo */
        "pointer",
      ],
      /* VFuncInfo */
      result: "pointer",
    },

    g_object_info_get_class_struct: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* StructInfo */
      result: "pointer",
    },
    g_object_info_get_ref_function: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_ref_function_pointer: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* ObjectInfoRefFunction */
      result: "function",
    },
    g_object_info_get_unref_function: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_unref_function_pointer: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* ObjectInfoUnrefFunction */
      result: "pointer",
    },
    g_object_info_get_set_value_function: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_set_value_function_pointer: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* ObjectInfoSetValueFunction */
      result: "pointer",
    },
    g_object_info_get_get_value_function: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_object_info_get_get_value_function_pointer: {
      parameters: [
        /* ObjectInfo */
        "pointer",
      ],
      /* ObjectInfoGetValueFunction */
      result: "pointer",
    },

    // ConstantInfo
    g_constant_info_free_value: {
      parameters: [
        /* ConstantInfo */
        "pointer",
        /* Argument */
        "pointer",
      ],
      result: "void",
    },
    g_constant_info_get_type: {
      parameters: [
        /* ConstantInfo */
        "pointer",
      ],
      /* TypeInfo */
      result: "pointer",
    },
    g_constant_info_get_value: {
      parameters: [
        /* ConstantInfo */
        "pointer",
        /* Argument */
        "pointer",
      ],
      result: "isize",
    },

    // EnumInfo
    g_enum_info_get_n_values: {
      parameters: [
        /* EnumInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_enum_info_get_value: {
      parameters: [
        /* EnumInfo */
        "pointer",
        "isize",
      ],
      /* ValueInfo */
      result: "pointer",
    },
    g_enum_info_get_n_methods: {
      parameters: [
        /* EnumInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_enum_info_get_method: {
      parameters: [
        /* EnumInfo */
        "pointer",
        "isize",
      ],
      /* FunctionInfo */
      result: "pointer",
    },
    g_enum_info_get_storage_type: {
      parameters: [
        /* EnumInfo */
        "pointer",
      ],
      /* TypeTag */
      result: "pointer",
    },
    g_enum_info_get_error_domain: {
      parameters: [
        /* EnumInfo */
        "pointer",
      ],
      /* string */
      result: "pointer",
    },
    g_value_info_get_value: {
      parameters: [
        /* ValueInfo */
        "pointer",
      ],
      result: "i64",
    },

    // StructInfo
    g_struct_info_find_field: {
      parameters: [
        /* StructInfo */
        "pointer",
        /* string */
        "pointer",
      ],
      /* FieldInfo */
      result: "pointer",
    },
    g_struct_info_get_alignment: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_struct_info_get_size: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_struct_info_is_gtype_struct: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "bool",
    },
    g_struct_info_is_foreign: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "bool",
    },
    g_struct_info_get_n_fields: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_struct_info_get_field: {
      parameters: [
        /* StructInfo */
        "pointer",
        "isize",
      ],
      /* FieldInfo */
      result: "pointer",
    },
    g_struct_info_get_n_methods: {
      parameters: [
        /* StructInfo */
        "pointer",
      ],
      result: "isize",
    },
    g_struct_info_get_method: {
      parameters: [
        /* StructInfo */
        "pointer",
        "isize",
      ],
      /* FunctionInfo */
      result: "pointer",
    },
    g_struct_info_find_method: {
      parameters: [
        /* StructInfo */
        "pointer",
        /* string */
        "pointer",
      ],
      /* FunctionInfo */
      result: "pointer",
    },
  } as const,
);
