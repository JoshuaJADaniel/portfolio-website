const getGoogleSearchLink = (search: string) =>
  `https://www.google.com/search?q=${search.replace(/\s/g, "+")}`;

export default getGoogleSearchLink;
