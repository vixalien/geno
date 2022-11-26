export const encoder = new TextEncoder();
export const decoder = new TextDecoder();
export const encode = (s: string) => encoder.encode(s);
export const decode = (b: BufferSource) => decoder.decode(b);

export const strToPointer = (s: string) =>
  Deno.UnsafePointer.of(encode(s + "\0"));

export const pointerToStr = (ptr: Deno.PointerValue) =>
  new Deno.UnsafePointerView(ptr).getCString();
