const formatLink = (link: string) =>
  link
    .replace(/\/$/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\//g, " › ");

export default formatLink;
