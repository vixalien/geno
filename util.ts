export const encoder = new TextEncoder();
export const decoder = new TextDecoder();
export const encode = (s: string) => encoder.encode(s);
export const decode = (b: BufferSource) => decoder.decode(b);

export const strToPointer = (s: string) =>
  Deno.UnsafePointer.of(encode(s + "\0"));

export const pointerToStr = (ptr: Deno.PointerValue) =>
  new Deno.UnsafePointerView(ptr).getCString();

// reserve 64 bytes of memory and return a pointer to it
export const reserve = () => Deno.UnsafePointer.of(new BigInt64Array(1));
