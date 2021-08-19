const formatLink = (link: string) =>
  link
    .replace(/\/$/, "")
    .replace(/^https?:\/\//, "")
    .replaceAll("/", " › ");

export default formatLink;
