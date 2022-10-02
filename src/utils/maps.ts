export function mapFromValues<K, V>(
  values: Iterable<V>,
  keyFunc: (value: V) => K
): Map<K, V> {
  const ret = new Map();
  for (const value of values) {
    ret.set(keyFunc(value), value);
  }
  return ret;
}
