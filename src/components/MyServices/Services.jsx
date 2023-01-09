import '../MyServices/servicesStyles.css';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BsBrush } from 'react-icons/bs';
import { FiSmartphone } from 'react-icons/fi';
import { CiBullhorn } from 'react-icons/ci';
import { CgPerformance } from 'react-icons/cg';
import { BiLike } from 'react-icons/bi';

function Services() {
  return (
    <section className="service__section" id="services">
      <div className="se__container" data-aos="fade-down">
        <h2>
          <span>My </span> Services
        </h2>
      </div>

      <div className="services__container" data-aos="fade-up-right">
        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <MdOutlineDesignServices />
              </i>
            </div>
            <h3>Web Design</h3>
            <p>
              I Know The Importance Of Web Design And Can Help You Create A
              Website You'll Love.
            </p>
          </div>
        </div>

        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <BsBrush />
              </i>
            </div>
            <h3>Graphic Design</h3>
            <p>
              A Good And Attractive Web Design Helps You Keep Your Leads On Your
              Site, Witch Is The Digital Face Of Your Business.
            </p>
          </div>
        </div>

        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <FiSmartphone />
              </i>
            </div>
            <h3>Responsive Design</h3>
            <p>
              Your Site Will Display Properly On Any Device, Including Desktop
              Computers, Tablets And Mobile Phones.
            </p>
          </div>
        </div>

        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <CiBullhorn />
              </i>
            </div>
            <h3>Seo Marketing</h3>
            <p>
              I Will Optimize Your Site With Intelligent Search Engine
              Optimization Strategy To Generate Leads.
            </p>
          </div>
        </div>

        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <CgPerformance />
              </i>
            </div>
            <h3>Perfomance</h3>
            <p>
              Restaining Users Is Crucial To Improving Conversions.
              High-Perfoming Sites Engage And Retain Users.
            </p>
          </div>
        </div>

        <div className="column__card">
          <div className="service__card">
            <div className="icon__service">
              <i>
                <BiLike />
              </i>
            </div>
            <h3>Social Media</h3>
            <p>
              There Are A Lot Of Social Platforms Out There, And You Should
              Promote Your Presence On Them On Your Website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
