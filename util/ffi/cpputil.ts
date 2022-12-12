export const c_ccputil = Deno.dlopen("./build/cpputil.so", {
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
    parameters: [
      "pointer",
    ],
    /* AttributeIter */
    result: "pointer",
  },
});
