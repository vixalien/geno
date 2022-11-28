import { c_girepository } from "../lib/girepository.ts";
import { RegisteredTypeInfo } from "./registered_type_info.ts";

// TODO: i feel like this is incomplete. I don't know
// the reference is: https://gnome.pages.gitlab.gnome.org/gobject-introspection/girepository/
// more complete (from source): https://lazka.github.io/pgi-docs/GObject-2.0/mapping.html
// direct source: https://gitlab.gnome.org/GNOME/glib/-/blob/main/gobject/gsignal.h
// gtk source: https://docs.gtk.org/gobject/index.html
export class SignalInfo extends RegisteredTypeInfo {
  get flags() {
    return c_girepository.symbols.g_signal_info_get_flags(this.ptr);
  }

  get class_closure() {
    const ptr = c_girepository.symbols.g_signal_info_get_class_closure(
      this.ptr,
    );

    if (ptr === 0) return null;

    // TODO: return FunctionInfo.fromPointer(ptr);
    return ptr;
  }

  get true_stops_emit() {
    return c_girepository.symbols.g_signal_info_true_stops_emit(this.ptr);
  }
}
