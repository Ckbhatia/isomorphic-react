import { questions } from "./questions";

describe("The question reducer", () => {
  it("should work", () => {
    const state = ["foo", "bar"];
    const newState = questions(state, { type: "UNRECOGNISED_ACTION" });
    expect(newState).toEqual(state);
  });
});
