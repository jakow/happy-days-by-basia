export default function countWords(s: string): number {
  // Will optimise this if needed.
  return s.split(/\s/).filter(Boolean).length;
}
