export default function filterNulls<T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter(Boolean) as T[];
}
