import { test, expect } from "vitest";
import { messageDecoder } from "./decoder.js";

test("Decode the secret password", () => {
    const answer = "i love tacos";
    const code = messageDecoder("9 12-15-22-5 20-1-3-15-19");
    expect(code).toBe(answer);
  });

