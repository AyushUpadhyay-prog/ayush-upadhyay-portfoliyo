import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/ayush-upadhyay-26532a311",
    type: "social",
  },
  {
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/AyushUpadhyay-prog",
    type: "social",
  },
  {
    label: "Linktree",
    value: "Explore all my links",
    href: "https://linktr.ee/ayush_upadhyay12",
    type: "social",
  },
  {
    label: "Email",
    value: "1ayush2upadhyay3@gmail.com",
    href: "mailto:1ayush2upadhyay3@gmail.com",
    type: "email",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="section-container">

        {/* =================================================
            MAIN CONTACT CONTENT
        ================================================= */}

        <motion.div
          className="contact-content"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* Label */}

          <div className="contact-label">
            <span className="contact-number">
              08
            </span>

            <span>
              CONTACT
            </span>
          </div>


          {/* Availability */}

          <div className="availability-badge">
            <span className="availability-dot" />

            <span>
              OPEN TO CAREER OPPORTUNITIES
            </span>
          </div>


          {/* Heading */}

          <h2>
             Open to the            <br />
            <span> next opportunity.</span>
          </h2>


          {/* Description */}

          <p className="contact-description">
             I'm looking for opportunities where I can contribute,
  keep learning and grow as a developer while working
  on meaningful technology.
          </p>


          {/* CTA */}

          <div className="contact-primary">

            <a
              href="mailto:1ayush2upadhyay3@gmail.com"
              className="contact-email-button"
            >
              <span>
                Start a conversation
              </span>

              <span className="contact-button-arrow">
                ↗
              </span>
            </a>

            <span className="contact-email-note">
              Usually the fastest way to reach me
            </span>

          </div>


          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="contact-links">

            {contactLinks.map((link, index) => (

              <motion.a
                key={link.label}
                href={link.href}
                target={
                  link.type === "email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.type === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className={
                  link.type === "email"
                    ? "contact-link contact-link-email"
                    : "contact-link"
                }
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.08,
                }}
                whileHover={{
                  x: 5,
                }}
              >

                <div className="contact-link-info">

                  <span className="contact-link-label">
                    {link.label}
                  </span>

                  <span className="contact-link-value">
                    {link.value}
                  </span>

                </div>

                <span className="contact-arrow">
                  ↗
                </span>

              </motion.a>

            ))}

          </div>


          {/* =================================================
              FINAL MESSAGE
          ================================================= */}

          <motion.div
            className="contact-bottom"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >

            <span className="contact-line" />

            <p>
              Open to learning, building and
              <strong> growing with the right team.</strong>
            </p>

            <span className="contact-line" />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;