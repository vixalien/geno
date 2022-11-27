export const c_arg = Deno.dlopen("./native/arg.so", {
  g_argument_new: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    result: "void",
  },
  g_argument_set_v_boolean: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_boolean */
      "bool",
    ],
    result: "void",
  },
  g_argument_set_v_int8: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_int8 */
      "i8",
    ],
    result: "void",
  },
  g_argument_set_v_uint8: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_uint8 */
      "u8",
    ],
    result: "void",
  },
  g_argument_set_v_int16: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_int16 */
      "i16",
    ],
    result: "void",
  },
  g_argument_set_v_uint16: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_uint16 */
      "u16",
    ],
    result: "void",
  },
  g_argument_set_v_int32: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_int32 */
      "i32",
    ],
    result: "void",
  },
  g_argument_set_v_uint32: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_uint32 */
      "u32",
    ],
    result: "void",
  },
  g_argument_set_v_int64: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_int64 */
      "i64",
    ],
    result: "void",
  },
  g_argument_set_v_uint64: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_uint64 */
      "u64",
    ],
    result: "void",
  },
  g_argument_set_v_float: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_float */
      "f32",
    ],
    result: "void",
  },
  g_argument_set_v_double: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_double */
      "f64",
    ],
    result: "void",
  },
  g_argument_set_v_short: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_short */
      "isize",
    ],
    result: "void",
  },
  g_argument_set_v_ushort: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_ushort */
      "usize",
    ],
    result: "void",
  },
  g_argument_set_v_int: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_int */
      "isize",
    ],
    result: "void",
  },
  g_argument_set_v_uint: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_uint */
      "usize",
    ],
    result: "void",
  },
  g_argument_set_v_long: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_long */
      "i64",
    ],
    result: "void",
  },
  g_argument_set_v_ulong: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_ulong */
      "u64",
    ],
    result: "void",
  },
  g_argument_set_v_ssize: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_ssize */
      "isize",
    ],
    result: "void",
  },
  g_argument_set_v_size: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_size */
      "usize",
    ],
    result: "void",
  },
  g_argument_set_v_string: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_string */
      "pointer",
    ],
    result: "void",
  },
  g_argument_set_v_pointer: {
    parameters: [
      /* Argument */
      "pointer",
      /* v_pointer */
      "pointer",
    ],
    result: "void",
  },

  g_argument_get_v_boolean: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_boolean */
    result: "bool",
  },
  g_argument_get_v_int8: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_int8 */
    result: "i8",
  },
  g_argument_get_v_uint8: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_uint8 */
    result: "u8",
  },
  g_argument_get_v_int16: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_int16 */
    result: "i16",
  },
  g_argument_get_v_uint16: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_uint16 */
    result: "u16",
  },
  g_argument_get_v_int32: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_int32 */
    result: "i32",
  },
  g_argument_get_v_uint32: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_uint32 */
    result: "u32",
  },
  g_argument_get_v_int64: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_int64 */
    result: "i64",
  },
  g_argument_get_v_uint64: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_uint64 */
    result: "u64",
  },
  g_argument_get_v_float: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_float */
    result: "f32",
  },
  g_argument_get_v_double: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_double */
    result: "f64",
  },
  g_argument_get_v_short: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_short */
    result: "isize",
  },
  g_argument_get_v_ushort: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_ushort */
    result: "usize",
  },
  g_argument_get_v_int: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_int */
    result: "isize",
  },
  g_argument_get_v_uint: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_uint */
    result: "usize",
  },
  g_argument_get_v_long: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_long */
    result: "i64",
  },
  g_argument_get_v_ulong: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_ulong */
    result: "u64",
  },
  g_argument_get_v_ssize: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_ssize */
    result: "isize",
  },
  g_argument_get_v_size: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_size */
    result: "usize",
  },
  g_argument_get_v_string: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_string */
    result: "pointer",
  },
  g_argument_get_v_pointer: {
    parameters: [
      /* Argument */
      "pointer",
    ],
    /* v_pointer */
    result: "pointer",
  },
});
