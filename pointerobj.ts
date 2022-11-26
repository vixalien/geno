export class PointerObj {
  ptr: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.ptr = pointer;
  }
}
