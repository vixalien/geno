#include <girepository.h>
#include <stdio.h>

int main() {}

extern "C" gint g_error_get_code(GError *error)
{
  return error->code;
};

extern "C" gchar *g_error_get_message(GError *error)
{
  return error->message;
};

extern "C" void gi_attribute_iter_new(gpointer *output)
{
  GIAttributeIter iter = {
      0,
  };
  output[0] = (gpointer)&iter;
}
