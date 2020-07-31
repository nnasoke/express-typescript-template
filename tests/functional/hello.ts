import { describe, it, expect } from "../supports";

describe("app", () => {
  it("should show a welcome heading", async (test) => {
    const { remote } = test;
    await remote.get("/api/hello");
    expect(2).eq(6);
  });
});
