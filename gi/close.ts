export const closeAll = async () => {
  await import("./ffi/girepository.ts").then((module) => {
    module.c_girepository.close();
  });
  await import("./ffi/arg.ts").then((module) => {
    module.c_arg.close();
  });
  await import("../util/ffi/cpputil.ts").then((module) => {
    module.c_ccputil.close();
  });
};
