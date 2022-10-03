export default function countIf<T>(arr: T[], fn: (val: T) => boolean): number {
  let count = 0;
  for (const val of arr) {
    if (fn(val)) {
      count++;
    }
  }
  return count;
}
