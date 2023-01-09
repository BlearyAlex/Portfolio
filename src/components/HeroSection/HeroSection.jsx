import './herosectionStyles.css';
import IntroImg from './../../assets/Programming Wallpaper.jpeg';
function HeroSection() {
  return (
    <div className="hero" id="home">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <div className="home__img"></div>
        <div className="home__title">
          <h2>Hi!</h2>
          <h3>I'm Erick Ortiz</h3>
          <h4>Full Stack Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
