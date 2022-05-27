export class InvariantError extends Error {}

export default function nullthrows<T>(x: T | null, message?: string): T {
  if (x == null) {
    throw new InvariantError(
      message ?? `Expected value to be nonnull, got ${x} instead`
    );
  }
  return x;
}
