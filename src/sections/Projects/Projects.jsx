import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import blog from '../../assets/blog_.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import ewaste from '../../assets/e-waste.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://github.com/shubhankar4912/Blogging_website"
          h3="Blogging App"
          p=""
        />
        {/* <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Payment App"
          p=""
        /> */}
        <ProjectCard
          src={ewaste}
          link="https://github.com/shubhankar4912/SIH"
          h3="e-waste locator"
          p=""
        />

      </div>
    </section>
  );
}

export default Projects;
