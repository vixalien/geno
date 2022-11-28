export const flagsToArray = (
  enumType: Record<string, number>,
  flags: number,
) => {
  const result: string[] = [];
  for (const [key, value] of Object.entries(enumType)) {
    if ((flags & value) === value) {
      result.push(key);
    }
  }
  return result;
};

export const arrayToFlags = (
  enumType: Record<string, number>,
  array: string[],
) => {
  let result = 0;
  for (const key of array) {
    result |= enumType[key];
  }
  return result;
};
