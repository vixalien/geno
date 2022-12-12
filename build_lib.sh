#!/bin/bash

mkdir -p build

g++ -c ./cpp/cpputil.cpp `pkg-config --cflags --libs gobject-introspection-1.0` -o build/cpputil.o
g++ -shared -fPIC -o build/cpputil.so build/cpputil.o

g++ -c ./cpp/arg.cpp `pkg-config --cflags --libs gobject-introspection-1.0` -o build/arg.o
g++ -shared -fPIC -o build/arg.so build/arg.o

rm -rf build/*.o
