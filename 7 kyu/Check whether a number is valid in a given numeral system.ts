const numberSystem = [
  ...Array.from({length: 10}, (_, i) => i.toString()),
  ...Array.from({length: 26}, (_, i) => String.fromCharCode(i+65))
];
export function validateBase(num: string, base: number): boolean {
  const numbers: number[] = [...num].map((n: string) => numberSystem.indexOf(n));
  return !numbers.some((n: number) => n >= base);
}
