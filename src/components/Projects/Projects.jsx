import '../Projects/projectsStyles.css';
import data from './data';

function Projects() {
  return (
    <section id="projects">
      <div className="projects__container" data-aos="fade-down">
        <h2>
          <span>My</span> Recents Works
        </h2>
        <h3>Portfolio</h3>
      </div>

      <div className="p__container portfolio__container" data-aos="fade-left">
        {data.map(({ id, image, title, desciption, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  className="img-portfolio"
                  src={image}
                  alt=""
                  width="480px"
                  height="220px"
                />
              </div>
              <h3>{title}</h3>
              <p>{desciption}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn__portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn__portfolio btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
