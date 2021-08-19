import styles from "./KnowledgePanel.module.scss";

interface InfoItem {
  title: string;
  info: string | JSX.Element;
}

interface ProfileItem {
  title: string;
  link: string;
  image: string;
}

interface SimilarItem {
  name: string;
  link: string;
  image: string;
}

interface KnowledgePanelProps {
  name: string;
  title: string;
  listInfo: InfoItem[];
  images: [string, string, string];
  description: string | JSX.Element;
  profiles: ProfileItem[];
  similarPeople: SimilarItem[];
}

const KnowledgePanel = ({
  name,
  title,
  images,
  listInfo,
  description,
  profiles,
  similarPeople,
}: KnowledgePanelProps) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      {images.map((image) => (
        <div style={{ backgroundImage: `url(${image})` }} />
      ))}
    </div>
    <div className={styles.knowledgePanelHeader}>
      <h1 className={styles.profileName}>{name}</h1>
      <h2 className={styles.profileTitle}>{title}</h2>
    </div>
    <div className={styles.knowledgeSection}>
      <p>{description}</p>
      <p className={styles.listInfo}>
        {listInfo.map((item) => (
          <span>
            <b>{item.title}:</b> {item.info}
          </span>
        ))}
      </p>
    </div>
    <div className={styles.knowledgeSection}>
      <h3>Profiles</h3>
      <div className={styles.profileInfoWrapper}>
        {profiles.map((profile) => (
          <a href={profile.link} target="_blank" rel="noreferrer">
            <img alt={profile.title} src={profile.image} />
            <p>{profile.title}</p>
          </a>
        ))}
      </div>
    </div>
    <div className={styles.knowledgeSection}>
      <h3>People also search for</h3>
      <div className={styles.similarPeopleWrapper}>
        {similarPeople.map((person) => (
          <a href={person.link} target="_blank" rel="noreferrer">
            <div style={{ backgroundImage: `url(${person.image})` }} />
            <p>{person.name}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default KnowledgePanel;
