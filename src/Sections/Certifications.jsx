import { motion } from "framer-motion";

const certifications = [
  {
    number: "01",
    title: "WEBMATRIX 2.0",
    subtitle: "WEB DEVELOPMENT WORKSHOP",
    organization:
      "Lucky Institute of Professional Studies, Jodhpur",
    duration: "45 HOURS",
    year: "2024",
    description:
      "Completed a 45-hour web development workshop focused on strengthening my foundation in web technologies and building web-based applications.",
    certificate:
      "https://drive.google.com/file/d/1Kb1PYE5r2kg6mesif6Ssa-ABNxzW37eR/view?usp=sharing",
    category: "DEVELOPMENT",
  },

  {
    number: "02",
    title: "Digital Marketing with AI",
    subtitle: "AI WORKSHOP",
    organization:
      "Lucky Institute of Professional Studies, Jodhpur",
    duration: "25 HOURS",
    year: "2025",
    description:
      "Completed a 25-hour workshop exploring digital marketing concepts and practical applications of artificial intelligence in digital workflows.",
    certificate:
      "https://drive.google.com/file/d/1jsQnBiOVKpVsD9MndL8FJgJSRSQ3VKwS/view?usp=sharing",
    category: "ARTIFICIAL INTELLIGENCE",
  },

  {
    number: "03",
    title: "Promptverse",
    subtitle: "PROMPT ENGINEERING WORKSHOP",
    organization:
      "SIN School of AI & Lucky Institute of Professional Studies",
    duration: "WORKSHOP",
    year: "BCA",
    description:
      "Completed a prompt engineering workshop focused on understanding effective prompting techniques and working with modern AI systems.",
    certificate:
      "https://www.linkedin.com/posts/ayush-upadhyay-26532a311_aipromptengineering-aiworkshop-aicertification-share-7431007847947255809-7YAZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8_mu0BxDp9Rd7Z7O-bFz_rnGIf1smE_vA",
    category: "AI & PROMPT ENGINEERING",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="section-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="section-heading certifications-heading"
          initial={{
            opacity: 0,
            y: 30,
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
          <div className="section-label">
            <span className="section-number">
              05
            </span>

            <span>
              CERTIFICATIONS & WORKSHOPS
            </span>
          </div>

          <h2>
            Learning beyond
            <br />
            <span>the classroom.</span>
          </h2>

          <p className="section-intro">
            Workshops and learning experiences that helped
            me explore development, artificial intelligence
            and emerging technologies during my BCA journey.
          </p>
        </motion.div>


        {/* =================================================
            CERTIFICATION GRID
        ================================================= */}

        <div className="certifications-grid">

          {certifications.map((item, index) => (

            <motion.article
              className="certification-card"
              key={item.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
            >

              {/* Glow */}

              <div className="certification-glow" />


              {/* =================================================
                  TOP
              ================================================= */}

              <div className="certification-top">

                <span className="certification-number">
                  {item.number}
                </span>

                <span className="certification-year">
                  {item.year}
                </span>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="certification-content">

                <span className="certification-category">
                  {item.category}
                </span>

                <span className="certification-type">
                  {item.subtitle}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p className="certification-organization">
                  {item.organization}
                </p>

                <p className="certification-description">
                  {item.description}
                </p>

              </div>


              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="certification-footer">

                <span className="certification-duration">
                  <span className="duration-dot" />
                  {item.duration}
                </span>

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <span>
                      View Certificate
                    </span>

                    <span className="certificate-arrow">
                      ↗
                    </span>
                  </a>
                )}

              </div>

            </motion.article>

          ))}

        </div>


        {/* =================================================
            TRUST NOTE
        ================================================= */}

        <motion.div
          className="certification-note"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="note-icon">
            ✓
          </span>

          <p>
            Certificates are provided through external
            verification links for reference.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;