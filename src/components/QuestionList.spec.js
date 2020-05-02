describe("The Question List", () => {
  beforeEach(() => {
    console.log("TEST TEST TEST");
  });
  beforeAll(() => {
    console.log("Before all ran");
  });

  afterAll(() => {
    console.log("After all ran");
  });

  afterEach(() => {
    console.log("After each ran");
  });
  it("Should display a list of items", () => {
    expect(2 + 2).toEqual(4);
  });
  it("Should display a papu", () => {
    expect(40 + 2).toEqual(42);
  });
});
