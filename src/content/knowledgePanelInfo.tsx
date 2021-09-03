import getGoogleSearchLink from "utils/getGoogleSearchLink";

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

const infoList = [
  {
    title: "Born",
    info: <>January 24, 2002</>,
  },
  {
    title: "Location",
    info: <a href={getGoogleSearchLink("Toronto")}>Toronto, Canada</a>,
  },
  {
    title: "Education",
    info: (
      <>
        <a href={getGoogleSearchLink("University of Toronto")}>
          University of Toronto
        </a>{" "}
        (2020 - Present)
      </>
    ),
  },
  {
    title: "Height",
    info: <>1.80m</>,
  },
];

const socialProfiles = [
  {
    title: "LinkedIn",
    image: linkedinLogo,
    link: "https://linkedin.com/in/joshuajadaniel",
  },
  {
    title: "GitHub",
    image: githubLogo,
    link: "https://github.com/joshuajadaniel",
  },
];

const similarPeople = [
  {
    name: "Keanu Reeves",
    link: getGoogleSearchLink("Keanu Reeves"),
    image: keanuReeves,
  },
  {
    name: "Morgan Freeman",
    link: getGoogleSearchLink("Morgan Freeman"),
    image: morganFreeman,
  },
  {
    name: "Bill Gates",
    link: getGoogleSearchLink("Bill Gates"),
    image: billGates,
  },
  {
    name: "Robert Downey Jr.",
    link: getGoogleSearchLink("Robert Downey Jr."),
    image: robertDowneyJr,
  },
];

const knowledgePanelInfo = {
  name: "Joshua Daniel",
  title: "Software Engineer",

  images,
  infoList,
  description,
  socialProfiles,
  similarPeople,
};

export default knowledgePanelInfo;
