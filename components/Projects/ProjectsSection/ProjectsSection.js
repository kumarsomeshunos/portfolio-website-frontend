import MainCard from "@/components/core/MainCard/MainCard";
import styles from "./ProjectsSection.module.css";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import ProjectCard from "@/components/core/ProjectCard/ProjectCard";

export default function ProjectSection({ projects }) {
  let random = Math.floor(Math.random() * 1) + 1;
  return (
    <section
      className={styles.main}
      //   style={{
      //       backgroundImage:
      //         "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //     }}
    >
      <div className={`${styles.container} ${styles.wrapper}`}>
        <h2 className={styles.heading}>Featured Project</h2>
        <MainCard thumbnail={projects[0].featuredThumbnail ? projects[0].featuredThumbnail : projects[0].thumbnail} title={projects[0].title} postedOn={projects[0].postedOn} />
        <h2 className={styles.heading}>All Projects</h2>
        <div className={styles.divProjects}>
          {projects.map((project) => {
            return (
              <ProjectCard
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
      </div>
    </section>
  );
}
