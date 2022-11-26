import { c_girepository } from "../lib/girepository.ts";
import { pointerToStr } from "../util.ts";

export enum InfoType {
  INVALID,
  FUNCTION,
  CALLBACK,
  STRUCT,
  BOXED,
  ENUM, /*  5 */
  FLAGS,
  OBJECT,
  INTERFACE,
  CONSTANT,
  INVALID_0, /* 10 */
  UNION,
  VALUE,
  SIGNAL,
  VFUNC,
  PROPERTY, /* 15 */
  FIELD,
  ARG,
  TYPE,
  UNRESOLVED,
}

export const info_type_to_string = (type: InfoType) => {
  const ptr = c_girepository.symbols.g_info_type_to_string(type);

  return pointerToStr(ptr);
};
