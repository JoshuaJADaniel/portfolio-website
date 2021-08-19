const formatLink = (link: string) =>
  link.replace(/^https?:\/\//, "").replaceAll("/", " › ");

export default formatLink;
