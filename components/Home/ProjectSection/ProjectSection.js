import styles from "./ProjectSection.module.css";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
import ProjectCard from "@/components/core/ProjectCard/ProjectCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function ProjectSection({
  sectionOneHeading,
  sectionOneSubHeading,
  sectionOneButtons,
  projects,
}) {
  return (
    <section
      className={styles.main}
      // style={{
      //   backgroundImage:
      //     "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      // }}
    >
      <h2 className={`${styles.heading} ${ubuntu.className}`}>
        {sectionOneHeading.toUpperCase()}
      </h2>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.divCards}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                src={project.thumbnail}
                title={project.title}
                postedOn={project.postedOn}
                status={project.status}
                subtitle={project.subtitle}
                description={project.description}
                links={project.links}
              />
            );
          })}
        </div>
        <div className={styles.divButtons}>
          {sectionOneButtons.map((sectionOneButton) => {
            return (
              <MainButton
                key={sectionOneButton.key}
                text={sectionOneButton.key}
                href={sectionOneButton.value}
                margin={"0"}
                boxShadow={"none"}
                border={"2px solid #1A9FEA"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
