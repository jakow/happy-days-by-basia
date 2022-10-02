type Booleanish = undefined | null | boolean | string | number;
type Stringish = string | undefined | null;
export type ClassLike =
  | Stringish
  | Stringish[]
  | { [key: string]: Booleanish }
  | null;

export default function classes(
  ...classlikes: ClassLike[]
): string | undefined {
  if (classlikes.length == 0) {
    return undefined;
  }
  const classlist: string[] = [];

  for (const classlike of classlikes) {
    expand(classlist, classlike);
  }
  return classlist.length > 0 ? classlist.join(" ") : undefined;
}

function expand(accumulator: string[], classlike: ClassLike): void {
  if (!classlike) {
    return;
  }
  if (typeof classlike === "string") {
    accumulator.push(classlike);
  } else if (Array.isArray(classlike)) {
    for (const classish of classlike) {
      if (classish) {
        accumulator.push(classish);
      }
    }
  } else if (typeof classlike === "object") {
    for (const [className, condition] of Object.entries(classlike)) {
      if (condition) {
        accumulator.push(className);
      }
    }
  }
}
