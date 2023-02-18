import './aboutStyles.css';
import Img from './../../assets/1664740625989.jpg';
import { HiDownload } from 'react-icons/hi';
import Card from '../Card/Card';
import data from './data';

function About() {
  return (
    <section id="about">
      <div className="a-container about__container">
        <div className="about__left" data-aos="fade-up">
          <img className="about__img" src={Img} alt="" />
        </div>
        <div className="about__right" data-aos="zoom-in-down">
          <h2>
            About <span>Me</span>
          </h2>
          <div className="about__card">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hello I am Erick Ortiz, Computer Systems Engineer focused on the
            programming branch, I am a full stack developer with 3 years of
            experience in the management of various technologies, especially in
            Reactjs, my goal is to find a company that will allow me to grow and
            improve within the same and go learning from my teammates within the
            team, and also give me the opportunity to put into practice my
            skills and knowledge acquired in the years of study.
          </p>
          <a className="btn" href="./CV_Erick Alejadro Ortiz V..pdf">
            Download
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
