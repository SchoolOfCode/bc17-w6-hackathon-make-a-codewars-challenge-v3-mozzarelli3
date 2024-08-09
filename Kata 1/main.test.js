import { test, expect } from "vitest";
import { makeLowerCase } from "./main.js";


test("Make sure answer is in lower-case", () => {
    const input = "I LOVE TACOS";
    const expectedOutput = "i love tacos";
    expect(makeLowerCase(input)).toBe(expectedOutput);
});