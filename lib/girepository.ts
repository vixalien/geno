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
});
