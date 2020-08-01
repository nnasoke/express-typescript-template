import intern from "intern";

const {
  describe,
  it,
  before,
  beforeEach,
  after,
  afterEach,
} = intern.getPlugin("interface.bdd");
const { assert } = intern.getPlugin("chai");

export { describe, it, before, beforeEach, after, afterEach, assert };
