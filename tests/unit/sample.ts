import { describe, it, expect } from "../supports";

describe("Sample", () => {
  it("should have a name property when instantiated", () => {
    const obj = { name: "foo" };
    expect(obj).to.have.property("name", "foo");
  });
});
