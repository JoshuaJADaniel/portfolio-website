import formatLink from "./formatLink";

it("removes initial HTTPS", () => {
  expect(formatLink("https://abc")).toEqual("abc");
});

it("removes initial HTTP", () => {
  expect(formatLink("http://abc")).toEqual("abc");
});

it("removes trailing slash", () => {
  expect(formatLink("abc.com/")).toEqual("abc.com");
});

it("replaces inner slashes", () => {
  expect(formatLink("abc.com/dir/subdir/")).toEqual("abc.com › dir › subdir");
});
