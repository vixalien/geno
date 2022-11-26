g++ -c structs.cpp `pkg-config --cflags --libs gobject-introspection-1.0`
g++ -shared -fPIC -o structs.so structs.o
