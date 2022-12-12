# geno

Deno bindings for GObject.

disclaimer: this project is not yet ready and I'm not a native/C/C++ developer. use at your own risk. this also only works on linux but porting it would be easy.

to use:

1. Install Deno from https://deno.land/#installation
2. Build the necessary libraries manually by running `./build_lib.bash`.
3. Run the example file: `deno run -A --unstable ./example/ascii_strup.ts`

note that the `--unstable` flag is required as direct FFI is still unstable in deno.

improvements are welcome.
