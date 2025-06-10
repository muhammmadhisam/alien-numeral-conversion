import { Effect } from 'effect';
import { describe, expect, it, vi } from 'vitest';
import * as pipe from './pipe';
import { ConsoleApp } from './program';

describe("Alien Numeral Conversion", () => {
  it('should return 3 for "AAA"', async () => {
    const app = new ConsoleApp();
    app["words"] = "AAA";
    app["numeral"] = await Effect.runPromise(pipe.run(app["words"]));
    expect(app["numeral"]).toBe(3);
  });

  it('should return 58 for "LBAAA"', async () => {
    const app = new ConsoleApp();
    app["words"] = "LBAAA";
    app["numeral"] = await Effect.runPromise(pipe.run(app["words"]));
    expect(app["numeral"]).toBe(58);
  });

  it('should return 1994 for "RCRZCAB"', async () => {
    const app = new ConsoleApp();
    app["words"] = "RCRZCAB";
    app["numeral"] = await Effect.runPromise(pipe.run(app["words"]));
    expect(app["numeral"]).toBe(1994);
  });
});