import MainCard from "@/components/core/MainCard/MainCard";
import styles from "./ProjectsSection.module.css";
import HeaderSection from "@/components/core/HeaderSection/HeaderSection";
import ProjectCard from "@/components/core/ProjectCard/ProjectCard";

export default function ProjectSection({ projects }) {
  let random = Math.floor(Math.random() * projects.length);
  return (
    <section
      className={styles.main}
      //   style={{
      //       backgroundImage:
      //         "url('https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg')",
      //     }}
    >
      {projects ? (<div className={`${styles.container} ${styles.wrapper}`}>
        <h2 className={styles.heading}>Featured Project</h2>
        <MainCard
          thumbnail={
            projects[random].featuredThumbnail
              ? projects[random].featuredThumbnail
              : projects[random].thumbnail
          }
          title={projects[random].title}
          postedOn={projects[random].postedOn}
        />
        <h2 className={styles.heading}>All Projects</h2>
        <div className={styles.divProjects}>
          {projects.map((project, index) => {
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
              />
            );
          })}
        </div>
      </div>) : (<HeaderSection
          heading={"".toUpperCase()}
          description={"No projects available 😔."}
          backgroundColor={"transparent"}
        />)}
    </section>
  );
}
