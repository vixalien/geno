export class PointerObj {
  #_ptr!: Deno.PointerValue;

  constructor() {
  }

  static fromPointer<T extends PointerObj>(
    // deno-lint-ignore no-explicit-any
    this: new (...args: any[]) => T,
    pointer: Deno.PointerValue,
  ) {
    const obj = new this();
    obj.__unsafeSetPointer(pointer);
    return obj;
  }

  get ptr() {
    return this.#_ptr;
  }

  __unsafeSetPointer(pointer: Deno.PointerValue) {
    this.#_ptr = pointer;
  }
}
