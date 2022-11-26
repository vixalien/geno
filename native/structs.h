#include <girepository.h>

gint gerror_get_code (GError error);
bool g_error_present (GError error);
gchar* g_error_get_message (GError error);
