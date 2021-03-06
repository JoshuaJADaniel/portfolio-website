import azureThumbnail from "images/thumbnails/activities/azure.jpg";
import picoctfThumbnail from "images/thumbnails/activities/picoctf.jpg";
import uoitThumbnail from "images/thumbnails/activities/uoit-thumbnail.jpg";
import hlssThumnail from "images/thumbnails/activities/hlss.jpg";

const activities = [
  {
    title: "Microsoft Certified: Azure Cloud AZ-900",
    link: "https://www.credly.com/badges/6bdb5c6f-e5f7-4a46-a0a2-f13912cddd1f",
    thumbnail: azureThumbnail,
    technologies: ["Cloud", "Pipelines", "DevOps", "Containers"],
    description: (
      <>
        Certification of knowledge in Azure Cloud core concepts, services,
        workloads, administration, security, privacy, etc.
      </>
    ),
  },
  {
    title: "Carnegie Mellon: picoCTF Hackathon",
    link: "https://picoctf.org/about",
    thumbnail: picoctfThumbnail,
    technologies: ["C", "C++", "SQL", "Bash", "Python"],
    description: (
      <>
        Placed 10th nationally and 26th internationally out of 110,000+
        participants at a cybersecurity hackathon centered on engineering,
        penetration testing, and decryption.
      </>
    ),
  },
  {
    title: "UOIT: Engineering Robotics Competition",
    link: "https://engineering.ontariotechu.ca",
    thumbnail: uoitThumbnail,
    technologies: ["EV3", "RBT"],
    description: (
      <>
        Competed at UOIT’s robotics competition and received 4th place
        distinction against all schools in Ontario.
      </>
    ),
  },
  {
    title: "HLSS: Lead Senior Mathematics Tutor",
    link: "https://www.peelschools.org/schools/heartlake",
    thumbnail: hlssThumnail,
    technologies: ["Calculus", "Linear Algebra", "Advanced Functions"],
    description: (
      <>
        Directed daily math tutoring sessions for Calculus / Linear Algebra and
        managed a team of 6-12 junior math tutors.
      </>
    ),
  },
];

export default activities;
