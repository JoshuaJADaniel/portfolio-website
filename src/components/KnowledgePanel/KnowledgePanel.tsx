import ExternalLink from "components/ExternalLink";
import styles from "./KnowledgePanel.module.scss";

interface InfoItem {
  title: string;
  info: string | JSX.Element;
}

interface SocialProfileItem {
  title: string;
  link: string;
  image: string;
}

interface SimilarPersonItem {
  name: string;
  link: string;
  image: string;
}

interface KnowledgePanelProps {
  name: string;
  title: string;
  infoList: InfoItem[];
  images: [string, string, string];
  description: string | JSX.Element;
  socialProfiles: SocialProfileItem[];
  similarPeople: SimilarPersonItem[];
}

const KnowledgePanel = ({
  name,
  title,
  images,
  infoList,
  description,
  socialProfiles,
  similarPeople,
}: KnowledgePanelProps) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      {images.map((image) => (
        <div key={image} style={{ backgroundImage: `url(${image})` }} />
      ))}
    </div>
    <div className={styles.knowledgePanelHeader}>
      <h1 className={styles.profileName}>{name}</h1>
      <h2 className={styles.profileTitle}>{title}</h2>
    </div>
    <div className={styles.knowledgeSection}>
      <p>{description}</p>
      <p className={styles.listInfo}>
        {infoList.map((item) => (
          <span key={`info-${item.title}`}>
            <b>{item.title}:</b> {item.info}
          </span>
        ))}
      </p>
    </div>
    <div className={styles.knowledgeSection}>
      <h3>Profiles</h3>
      <div className={styles.profileInfoWrapper}>
        {socialProfiles.map((socialProfile) => (
          <ExternalLink
            link={socialProfile.link}
            key={`social-profile-${socialProfile.title}`}
          >
            <img alt={socialProfile.title} src={socialProfile.image} />
            <p>{socialProfile.title}</p>
          </ExternalLink>
        ))}
      </div>
    </div>
    <div className={styles.knowledgeSection}>
      <h3>People also search for</h3>
      <div className={styles.similarPeopleWrapper}>
        {similarPeople.map((similarPerson) => (
          <ExternalLink
            link={similarPerson.link}
            key={`similar-person-${similarPerson.name}`}
          >
            <div style={{ backgroundImage: `url(${similarPerson.image})` }} />
            <p>{similarPerson.name}</p>
          </ExternalLink>
        ))}
      </div>
    </div>
  </div>
);

export default KnowledgePanel;
