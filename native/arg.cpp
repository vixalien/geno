#include <girepository.h>
#include <stdio.h>

int main() {}

extern "C" void g_argument_new(gpointer *ptr)
{
  GIArgument arg;
  ptr[0] = &arg;
}

extern "C" void g_argument_set_v_boolean(GIArgument *arg, gboolean v_boolean)
{
  arg->v_boolean = v_boolean;
}

extern "C" void g_argument_set_v_int8(GIArgument *arg, gint8 v_int8)
{
  arg->v_int8 = v_int8;
}

extern "C" void g_argument_set_v_uint8(GIArgument *arg, guint8 v_uint8)
{
  arg->v_uint8 = v_uint8;
}

extern "C" void g_argument_set_v_int16(GIArgument *arg, gint16 v_int16)
{
  arg->v_int16 = v_int16;
}

extern "C" void g_argument_set_v_uint16(GIArgument *arg, guint16 v_uint16)
{
  printf("hello %u", v_uint16);
  arg->v_uint16 = v_uint16;
}

extern "C" void g_argument_set_v_int32(GIArgument *arg, gint32 v_int32)
{
  arg->v_int32 = v_int32;
}

extern "C" void g_argument_set_v_uint32(GIArgument *arg, guint32 v_uint32)
{
  arg->v_uint32 = v_uint32;
}

extern "C" void g_argument_set_v_int64(GIArgument *arg, gint64 v_int64)
{
  arg->v_int64 = v_int64;
}

extern "C" void g_argument_set_v_uint64(GIArgument *arg, guint64 v_uint64)
{
  arg->v_uint64 = v_uint64;
}

extern "C" void g_argument_set_v_float(GIArgument *arg, gfloat v_float)
{
  arg->v_float = v_float;
}

extern "C" void g_argument_set_v_double(GIArgument *arg, gdouble v_double)
{
  arg->v_double = v_double;
}

extern "C" void g_argument_set_v_short(GIArgument *arg, gshort v_short)
{
  arg->v_short = v_short;
}

extern "C" void g_argument_set_v_ushort(GIArgument *arg, gushort v_ushort)
{
  arg->v_ushort = v_ushort;
}

extern "C" void g_argument_set_v_int(GIArgument *arg, gint v_int)
{
  arg->v_int = v_int;
}

extern "C" void g_argument_set_v_uint(GIArgument *arg, guint v_uint)
{
  arg->v_uint = v_uint;
}

extern "C" void g_argument_set_v_long(GIArgument *arg, glong v_long)
{
  arg->v_long = v_long;
}

extern "C" void g_argument_set_v_ulong(GIArgument *arg, gulong v_ulong)
{
  arg->v_ulong = v_ulong;
}

extern "C" void g_argument_set_v_ssize(GIArgument *arg, gssize v_ssize)
{
  arg->v_ssize = v_ssize;
}

extern "C" void g_argument_set_v_size(GIArgument *arg, gsize v_size)
{
  arg->v_size = v_size;
}

extern "C" void g_argument_set_v_string(GIArgument *arg, gchar *v_string)
{
  arg->v_string = v_string;
}

extern "C" void g_argument_set_v_pointer(GIArgument *arg, gpointer v_pointer)
{
  arg->v_pointer = v_pointer;
}

extern "C" gboolean g_argument_get_v_boolean(GIArgument *arg)
{
  return arg->v_boolean;
}

extern "C" gint8 g_argument_get_v_int8(GIArgument *arg)
{
  return arg->v_int8;
}

extern "C" guint8 g_argument_get_v_uint8(GIArgument *arg)
{
  return arg->v_uint8;
}

extern "C" gint16 g_argument_get_v_int16(GIArgument *arg)
{
  return arg->v_int16;
}

extern "C" guint16 g_argument_get_v_uint16(GIArgument *arg)
{
  return arg->v_uint16;
}

extern "C" gint32 g_argument_get_v_int32(GIArgument *arg)
{
  return arg->v_int32;
}

extern "C" guint32 g_argument_get_v_uint32(GIArgument *arg)
{
  return arg->v_uint32;
}

extern "C" gint64 g_argument_get_v_int64(GIArgument *arg)
{
  return arg->v_int64;
}

extern "C" guint64 g_argument_get_v_uint64(GIArgument *arg)
{
  return arg->v_uint64;
}

extern "C" gfloat g_argument_get_v_float(GIArgument *arg)
{
  return arg->v_float;
}

extern "C" gdouble g_argument_get_v_double(GIArgument *arg)
{
  return arg->v_double;
}

extern "C" gshort g_argument_get_v_short(GIArgument *arg)
{
  return arg->v_short;
}

extern "C" gushort g_argument_get_v_ushort(GIArgument *arg)
{
  return arg->v_ushort;
}

extern "C" gint g_argument_get_v_int(GIArgument *arg)
{
  return arg->v_int;
}

extern "C" guint g_argument_get_v_uint(GIArgument *arg)
{
  return arg->v_uint;
}

extern "C" glong g_argument_get_v_long(GIArgument *arg)
{
  return arg->v_long;
}

extern "C" gulong g_argument_get_v_ulong(GIArgument *arg)
{
  return arg->v_ulong;
}

extern "C" gssize g_argument_get_v_ssize(GIArgument *arg)
{
  return arg->v_ssize;
}

extern "C" gsize g_argument_get_v_size(GIArgument *arg)
{
  return arg->v_size;
}

extern "C" gchar *g_argument_get_v_string(GIArgument *arg)
{
  return arg->v_string;
}

extern "C" gpointer g_argument_get_v_pointer(GIArgument *arg)
{
  return arg->v_pointer;
}
