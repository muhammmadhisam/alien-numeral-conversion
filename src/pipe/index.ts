import { Effect } from "effect";

const SymbolLanguage: Record<string, number> = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
};

const subtractivePairs: Record<string, number> = {
  AB: 4, AZ: 9,
  ZL: 40, ZC: 90,
  CD: 400, CR: 900,
};

const validateSymbol = (input: string) => {
  const validSymbols = Object.keys(SymbolLanguage);
  const invalid = [...input].filter((char) => !validSymbols.includes(char));
  return invalid.length > 0
    ? Effect.fail(`Invalid symbols: ${invalid.join(", ")}`)
    : Effect.succeed(input);
};

const parseAlienNumeral = (input: string) => {
  const chars = input.split("");
  const values: number[] = [];
  for (let i = 0; i < chars.length; ) {
    const current = chars[i];
    const next = chars[i + 1];
    const pair = current + (next ?? "");
    if (subtractivePairs[pair]) {
      values.push(subtractivePairs[pair]);
      i += 2;
    } else {
      values.push(SymbolLanguage[current] ?? 0);
      i += 1;
    }
  }
  const total = values.reduce((acc, val) => acc + val, 0);
  return Effect.succeed(total);
};

export const run = (input: string) =>
  Effect.succeed(input).pipe(
    Effect.tap((s) => console.log(`Input: ${s}`)),
    Effect.andThen(validateSymbol),
    Effect.tap(() => console.log("Valid input")),
    Effect.andThen(parseAlienNumeral),
    Effect.tap((v) => console.log(`Total = ${v}`))
  );
