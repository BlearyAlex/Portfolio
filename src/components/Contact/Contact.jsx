import '../Contact/contactStyles.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i2m3x9i',
        'template_qzgcqlk',
        form.current,
        '4dSE_kJ_hgtBdw9t1'
      )

      .then(
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your message was sent',
          showConfirmButton: false,
          timer: 1500,
        })
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact__section" data-aos="zoom-in-up">
        <h5>Get in touch</h5>
        <h2>
          Contact <span>me</span>
        </h2>
      </div>

      <div className="c__container contact__container" data-aos="zoom-in-up">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>ea.ortizvillegas@gmail.com</h5>
            <a
              href="mailto:ea.ortizvillegas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin />
            <h4>Linkedin</h4>
            <h5>My perfil</h5>
            <a
              href="https://www.linkedin.com/in/erick-alejandro-ortiz-villegas-b341a2203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <h5>+1037626</h5>
            <a
              href="https://wa.me/524921037626"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn">Send message</button>
        </form>
      </div>
    </section>
  );
}
