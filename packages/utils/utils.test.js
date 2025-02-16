import { expect, test } from "vitest";
import { greet } from "../index.js";

test("greet function", () => {
    expect(greet("World")).toBe("Hello, World!");
});
