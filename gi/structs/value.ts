import { BaseInfo } from "./base.ts";
import { c_girepository } from "./util.ts";

export class ValueInfo extends BaseInfo {
  get value() {
    return c_girepository.symbols.g_value_info_get_value(this.ptr);
  }
}
