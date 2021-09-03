import getGoogleSearchLink from "./getGoogleSearchLink";

it("handles no spaces", () => {
  expect(getGoogleSearchLink("test")).toEqual(
    "https://www.google.com/search?q=test"
  );
});

it("handles uppercase", () => {
  expect(getGoogleSearchLink("TEST")).toEqual(
    "https://www.google.com/search?q=TEST"
  );
});

it("handles single spaces", () => {
  expect(getGoogleSearchLink("a b c")).toEqual(
    "https://www.google.com/search?q=a+b+c"
  );
});

it("handles multiple spaces", () => {
  expect(getGoogleSearchLink("a  b")).toEqual(
    "https://www.google.com/search?q=a++b"
  );
});
