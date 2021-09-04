import thumbnailMedicalClinicApp from "images/thumbnails/projects/medical-clinic-app.jpg";
import imageRepositoryThumbnail from "images/thumbnails/projects/image-repository.jpg";
import cursorluxThumbnail from "images/thumbnails/projects/cursorlux.jpg";
import portfolioThumbnail from "images/thumbnails/projects/portfolio.jpg";
import videoverseThumbnail from "images/thumbnails/projects/videoverse.jpg";

const projects = [
  {
    title: "Medical Clinic App",
    link: "https://github.com/joshuajadaniel/medical-clinic-app",
    thumbnail: thumbnailMedicalClinicApp,
    technologies: ["Java", "NoSQL", "Firebase", "Mockito", "JUnit"],
    description: (
      <>
        A mobile Android app that allows patients and doctors to book
        appointments, view availabilities, setup schedules, etc.
      </>
    ),
  },
  {
    title: "Image Repository",
    link: "https://github.com/joshuajadaniel/image-repository",
    thumbnail: imageRepositoryThumbnail,
    technologies: ["PHP", "MySQL", "React.js", "JWT"],
    description: (
      <>
        A web-based repository where users can publicly source stock images and
        secure private uploads in cloud storage.
      </>
    ),
  },
  {
    title: "Cursorlux",
    link: "https://github.com/joshuajadaniel/cursorlux",
    thumbnail: cursorluxThumbnail,
    technologies: ["JavaScript", "React.js", "Redux", "Jest", "RTL"],
    description: (
      <>
        A Chrome extension to highlight users’ cursor and clicks seen by over
        12,800+ unique users.
      </>
    ),
  },
  {
    title: "Google Search",
    link: "https://github.com/joshuajadaniel/portfolio-website",
    thumbnail: portfolioThumbnail,
    technologies: ["TypeScript", "Docker", "Jenkins", "React.js"],
    description: (
      <>
        A portfolio website in the style of a Google Search result built with a
        Jenkins CI/CD pipeline in a Docker container.
      </>
    ),
  },
  {
    title: "Videoverse",
    link: "https://github.com/joshuajadaniel/videoverse",
    thumbnail: videoverseThumbnail,
    technologies: ["React.js", "Sass/SCSS", "Axios"],
    description: (
      <>
        A realtime web application where users can browse 800,000+ trending
        movies, shows, actors, etc.
      </>
    ),
  },
];

export default projects;
