export const c_error = Deno.dlopen("./native/structs.so", {
  g_error_get_code: {
    parameters: [
      /* GError */
      "pointer",
    ],
    result: "isize",
  },
  g_error_get_message: {
    parameters: [
      /* GError */
      "pointer",
    ],
    /* String */
    result: "pointer",
  },
  gi_attribute_iter_new: {
    parameters: [],
    /* AttributeIter */
    result: "pointer",
  },
});
