import getGoogleSearchLink from "utils/getGoogleSearchLink";

import githubLogo from "images/logos/github.png";
import linkedinLogo from "images/logos/linkedin.png";

import billGates from "images/headshots/bill-gates.png";
import keanuReeves from "images/headshots/keanu-reeves.png";
import morganFreeman from "images/headshots/morgan-freeman.png";
import robertDowneyJr from "images/headshots/robert-downey-jr.png";

import uoftThumbnail from "images/thumbnails/other/uoft.jpg";
import torontoThumbnail from "images/thumbnails/other/toronto.jpg";
import headshot from "images/headshots/personal.jpg";

const images: [string, string, string] = [
  headshot,
  uoftThumbnail,
  torontoThumbnail,
];

const description = (
  <>
    Joshua Daniel is a second-year student at the University of Toronto studying
    Computer Science. He is a software engineer who is always expanding his
    knowledge in the field through work, school, and side projects.
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
