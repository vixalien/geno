import {
  c_arg,
  c_girepository,
  PointerObj,
  pointerToStr,
  strToPointer,
} from "./structs/util.ts";

export class Argument extends PointerObj {
  static generate() {
    const ptr = new BigInt64Array(1);

    c_arg.symbols.g_argument_new(Deno.UnsafePointer.of(ptr));

    return this.fromPointer(ptr[0]);
  }

  /* gboolean */
  get v_boolean() {
    return c_arg.symbols.g_argument_get_v_boolean(this.ptr);
  }
  set v_boolean(val: boolean) {
    c_arg.symbols.g_argument_set_v_boolean(this.ptr, val);
  }

  /* gint8    */
  get v_int8() {
    return c_arg.symbols.g_argument_get_v_int8(this.ptr);
  }
  set v_int8(val: number) {
    c_arg.symbols.g_argument_set_v_int8(this.ptr, val);
  }

  /* guint8   */
  get v_uint8() {
    return c_arg.symbols.g_argument_get_v_uint8(this.ptr);
  }
  set v_uint8(val: number) {
    c_arg.symbols.g_argument_set_v_uint8(this.ptr, val);
  }

  /* gint16   */
  get v_int16() {
    return c_arg.symbols.g_argument_get_v_int16(this.ptr);
  }
  set v_int16(val: number) {
    c_arg.symbols.g_argument_set_v_int16(this.ptr, val);
  }

  /* guint16  */
  get v_uint16() {
    return c_arg.symbols.g_argument_get_v_uint16(this.ptr);
  }
  set v_uint16(val: number) {
    c_arg.symbols.g_argument_set_v_uint16(this.ptr, val);
  }

  /* gint32   */
  get v_int32() {
    return c_arg.symbols.g_argument_get_v_int32(this.ptr);
  }
  set v_int32(val: number) {
    c_arg.symbols.g_argument_set_v_int32(this.ptr, val);
  }

  /* guint32  */
  get v_uint32() {
    return c_arg.symbols.g_argument_get_v_uint32(this.ptr);
  }
  set v_uint32(val: number) {
    c_arg.symbols.g_argument_set_v_uint32(this.ptr, val);
  }

  /* gint64   */
  get v_int64() {
    return c_arg.symbols.g_argument_get_v_int64(this.ptr);
  }
  set v_int64(val: bigint | number) {
    c_arg.symbols.g_argument_set_v_int64(this.ptr, val);
  }

  /* guint64  */
  get v_uint64() {
    return c_arg.symbols.g_argument_get_v_uint64(this.ptr);
  }
  set v_uint64(val: bigint | number) {
    c_arg.symbols.g_argument_set_v_uint64(this.ptr, val);
  }

  /* gfloat   */
  get v_float() {
    return c_arg.symbols.g_argument_get_v_float(this.ptr);
  }
  set v_float(val: number) {
    c_arg.symbols.g_argument_set_v_float(this.ptr, val);
  }

  /* gdouble  */
  get v_double() {
    return c_arg.symbols.g_argument_get_v_double(this.ptr);
  }
  set v_double(val: number) {
    c_arg.symbols.g_argument_set_v_double(this.ptr, val);
  }

  /* gshort   */
  get v_short() {
    return c_arg.symbols.g_argument_get_v_short(this.ptr) as number;
  }
  set v_short(val: number) {
    c_arg.symbols.g_argument_set_v_short(this.ptr, val);
  }

  /* gushort  */
  get v_ushort() {
    return c_arg.symbols.g_argument_get_v_ushort(this.ptr) as number;
  }
  set v_ushort(val: number) {
    c_arg.symbols.g_argument_set_v_ushort(this.ptr, val);
  }

  /* gint     */
  get v_int() {
    return c_arg.symbols.g_argument_get_v_int(this.ptr);
  }
  set v_int(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_int(this.ptr, val);
  }

  /* guint    */
  get v_uint() {
    return c_arg.symbols.g_argument_get_v_uint8(this.ptr);
  }
  set v_uint(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_uint(this.ptr, val);
  }

  /* glong    */
  get v_long() {
    return c_arg.symbols.g_argument_get_v_long(this.ptr);
  }
  set v_long(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_long(this.ptr, val);
  }

  /* gulong   */
  get v_ulong() {
    return c_arg.symbols.g_argument_get_v_ulong(this.ptr);
  }
  set v_ulong(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_ulong(this.ptr, val);
  }

  /* gssize   */
  get v_ssize() {
    return c_arg.symbols.g_argument_get_v_ssize(this.ptr);
  }
  set v_ssize(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_ssize(this.ptr, val);
  }

  /* gsize    */
  get v_size() {
    return c_arg.symbols.g_argument_get_v_ssize(this.ptr);
  }
  set v_size(val: number | bigint) {
    c_arg.symbols.g_argument_set_v_size(this.ptr, val);
  }

  /* gchar*  */
  get v_string() {
    const ptr = c_arg.symbols.g_argument_get_v_string(this.ptr);

    return pointerToStr(ptr);
  }
  set v_string(val: string) {
    c_arg.symbols.g_argument_set_v_string(this.ptr, strToPointer(val));
  }

  /* gpointer */
  get v_pointer() {
    return c_arg.symbols.g_argument_get_v_pointer(this.ptr);
  }
  set v_pointer(val: Deno.PointerValue) {
    c_arg.symbols.g_argument_set_v_pointer(this.ptr, val);
  }
}

export enum ArrayType {
  GI_ARRAY_TYPE_C,
  GI_ARRAY_TYPE_ARRAY,
  GI_ARRAY_TYPE_PTR_ARRAY,
  GI_ARRAY_TYPE_BYTE_ARRAY,
}

export enum TypeTag {
  /* Basic types */
  VOID = 0,
  BOOLEAN = 1,
  INT8 = 2, /* Start of GI_TYPE_TAG_IS_NUMERIC types */
  UINT8 = 3,
  INT16 = 4,
  UINT16 = 5,
  INT32 = 6,
  UINT32 = 7,
  INT64 = 8,
  UINT64 = 9,
  FLOAT = 10,
  DOUBLE = 11, /* End of numeric types */
  GTYPE = 12,
  UTF8 = 13,
  FILENAME = 14,
  /* Non-basic types; compare with GI_TYPE_TAG_IS_BASIC */
  ARRAY = 15, /* container (see GI_TYPE_TAG_IS_CONTAINER) */
  INTERFACE = 16,
  GLIST = 17, /* container */
  GSLIST = 18, /* container */
  GHASH = 19, /* container */
  ERROR = 20,
  /* Another basic type */
  UNICHAR = 21,
  /* Note - there is currently only room for 32 tags */
}

export const type_tag_to_string = (type: TypeTag) => {
  const ptr = c_girepository.symbols.g_type_tag_to_string(type);

  return pointerToStr(ptr);
};
