export const closeAll = async () => {
  await import("./girepository.ts").then((module) => {
    module.c_girepository.close();
  });
  await import("./structs.ts").then((module) => {
    module.c_error.close();
  });
};
