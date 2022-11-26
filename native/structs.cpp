#include <girepository.h>

int main() {}

extern "C" gint g_error_get_code(GError error)
{
  return error.code;
};

extern "C" gchar *g_error_get_message(GError error)
{
  return error.message;
};

extern "C" GIAttributeIter *gi_attribute_iter_new()
{
  GIAttributeIter iter = {
      0,
  };
  return &iter;
}
