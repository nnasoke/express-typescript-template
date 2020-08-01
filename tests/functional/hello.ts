import App from "../../src/App";
import supertest from "supertest";

import { describe, it } from "../helpers";

describe("Hello", () => {
  const client = supertest(App);

  it("should show a ok text", async (test) => {
    client
      .get("/api/hello")
      .expect(200, JSON.stringify("Hello there!"))
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
