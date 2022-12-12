#include <girepository.h>

int
main (void)
{
  GIRepository *repository;
  GError *error = NULL;
  GIBaseInfo *base_info;
  GIArgument in_args[2];
  GIArgument retval;
  GIRepositoryLoadFlags flags= (GIRepositoryLoadFlags) -1;

  repository = g_irepository_get_default ();
  g_print("hello");
  g_irepository_require (repository, "GLib", "2.0", flags, &error);
  if (error)
    {
      g_error ("ERROR12: %s\n", error->message);
      return 1;
    }
  g_print("hello");

  base_info = g_irepository_find_by_name (repository, "GLib", "ascii_strup");
  if (!base_info)
    {
      g_error ("ERROR12: %s\n", "Could not find GLib.ascii_strup");
      return 1;
    }
  g_print("hello");


  in_args[0].v_pointer = (gpointer)"hello\0";
  in_args[1].v_int = 4;

  if (!g_function_info_invoke ((GIFunctionInfo *) base_info,
                               (const GIArgument *) &in_args,
                               2,
                               NULL,
                               0,
                               &retval,
                               &error))
    {
      g_error ("ERROR12: %s\n", error->message);
      return 1;
    }

  g_base_info_unref (base_info);

  return 0;
}
