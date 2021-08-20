import githubLogo from "images/github-logo.png";
import linkedinLogo from "images/linkedin-logo.png";

import billGates from "images/bill-gates-headshot.png";
import keanuReeves from "images/keanu-reeves-headshot.png";
import morganFreeman from "images/morgan-freeman-headshot.png";
import robertDowneyJr from "images/robert-downey-jr-headshot.png";

const images: [string, string, string] = [
  "https://dummyimage.com/600x400/000be0/fff",
  "https://dummyimage.com/600x400/000be0/fff",
  "https://dummyimage.com/600x400/000be0/fff",
];

const description = (
  <>
    In vel congue ipsum. <b>Nulla risus</b> massa, eleifend a arcu ac, malesuada
    congue massa. Vivamus sed interdum massa. Sed congue neque id diam volutpat,
    cursus pharetra odio luctus. Aenean at <b>condimentum</b> risus, sit amet
    facilisis enim.
  </>
);

const listInfo = [
  {
    title: "Born",
    info: (
      <>
        January 1, 1900, <a href="#">City, Country</a>
      </>
    ),
  },
  {
    title: "Education",
    info: (
      <>
        <a href="#">University of City</a> (2020 - Present)
      </>
    ),
  },
  {
    title: "Height",
    info: <>1.80m</>,
  },
];

const profiles = [
  {
    title: "LinkedIn",
    image: linkedinLogo,
    link: "https://linkedin.com/in/user",
  },
  {
    title: "GitHub",
    image: githubLogo,
    link: "https://github.com/user",
  },
];

const similarPeople = [
  {
    name: "Keanu Reeves",
    link: "https://www.google.com/search?q=Keanu+Reeves",
    image: keanuReeves,
  },
  {
    name: "Morgan Freeman",
    link: "https://www.google.com/search?q=Morgan+Freeman",
    image: morganFreeman,
  },
  {
    name: "Bill Gates",
    link: "https://www.google.com/search?q=Bill+Gates",
    image: billGates,
  },
  {
    name: "Robert Downey Jr.",
    link: "https://www.google.com/search?q=Robert+Downey+Jr.",
    image: robertDowneyJr,
  },
];

const profile = {
  name: "Full Name",
  title: "Software Engineer",

  images,
  listInfo,
  description,
  profiles,
  similarPeople,
};

export default profile;