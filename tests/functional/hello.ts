import request from "supertest";
import App from "../../src/App";
import { describe, it, expect } from "../supports";

describe("Hello", () => {
  it("should show a welcome message", async (test) => {
    request(App).get("/api/hello");
    expect(2).eq(6);
  });
});
