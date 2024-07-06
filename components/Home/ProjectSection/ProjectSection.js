import styles from "./ProjectSection.module.css";
import ProjectCard from "@/components/core/ProjectCard/ProjectCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";

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
      <HeaderSection
        heading={sectionOneHeading.toUpperCase()}
        description={
          sectionOneSubHeading
        }
        backgroundColor={"transparent"}
      />
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.divCards}>
          {projects.map((project, index) => {
            console.log(project.slug)
            return (
              <ProjectCard
                key={index}
                src={project.thumbnail}
                title={project.title}
                postedOn={project.postedOn}
                status={project.status}
                subtitle={project.subtitle}
                description={project.description}
                links={project.links}
                slug={project.slug}
                details={project.details}
              />
            );
          })}
        </div>
        <div className={styles.divButtons}>
          {sectionOneButtons.map((sectionOneButton, index) => {
            return (
              <MainButton
                key={index}
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
