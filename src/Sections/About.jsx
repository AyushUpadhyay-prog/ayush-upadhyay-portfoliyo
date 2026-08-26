import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    title: "BCA Graduate",
    description:
      "Completed my BCA and built a foundation across software development, databases, web technologies and programming.",
    tag: "EDUCATION",
  },
  {
    number: "02",
    title: "PetHub",
    description:
      "Developed PetHub as my final-semester project — a practical pet care and adoption platform combining web, mobile and backend technologies.",
    tag: "PROJECT",
  },
  {
    number: "03",
    title: "3rd Place — PromptVerse",
    description:
      "Participated in the PromptVerse workshop hackathon and secured 3rd position by working with my team to solve a practical problem.",
    tag: "ACHIEVEMENT",
  },
  {
    number: "04",
    title: "AI & Prompt Engineering",
    description:
      "Explored artificial intelligence, generative AI and prompt engineering through workshops, projects and hands-on experimentation.",
    tag: "EXPLORING",
  },
];

const focusAreas = [
  "Software Development",
  "Web Development",
  "Artificial Intelligence",
  "Prompt Engineering",
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="section-heading about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span className="section-number">01</span>
            <span>ABOUT ME</span>
          </div>

          <h2>
            Building with code.
            <br />
            <span>Exploring with AI.</span>
          </h2>

          <p className="section-intro">
            A BCA graduate focused on turning what I learn into
            practical digital experiences.
          </p>
        </motion.div>

        {/* =================================================
            MAIN ABOUT GRID
        ================================================= */}

        <div className="about-grid">

          {/* =================================================
              LEFT — INTRODUCTION
          ================================================= */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="about-eyebrow">
              <span className="status-dot"></span>
              CURRENTLY BUILDING & LEARNING
            </div>

            <p className="about-lead">
               I'm <strong>Ayush Upadhyay</strong>, a BCA graduate
  from Jodhpur interested in software development and
  artificial intelligence. I learn best by building,
  experimenting and turning ideas into working products.
            </p>

            <p>
                During my BCA, I worked across web development,
  mobile applications, databases, AI/ML and prompt
  engineering. My projects have helped me understand
  how different technologies come together to solve
  practical problems.
            </p>

            <p>
              My final semester project, <strong>PetHub</strong>,
  brought together React Native, Expo and Supabase
  to create a pet care and adoption platform.
            </p>

            <p>
              I also participated in the PromptVerse workshop
              hackathon, where my team secured{" "}
              <strong>3rd position</strong>. These experiences
              helped me understand how development, problem-solving
              and AI can come together to create useful solutions.
            </p>

            {/* Focus Areas */}

            <div className="focus-area">
              <span className="focus-label">
                CURRENT FOCUS
              </span>

              <div className="focus-list">
                {focusAreas.map((item, index) => (
                  <motion.span
                    key={item}
                    className="focus-item"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}

            <motion.a
              href="#contact"
              className="about-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Let's connect
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT — JOURNEY CARDS
          ================================================= */}

          <div className="about-journey">

            {journey.map((item, index) => (
              <motion.article
                key={item.number}
                className="journey-card"
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
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* Number */}

                <div className="journey-number">
                  {item.number}
                </div>

                {/* Content */}

                <div className="journey-content">

                  <span className="journey-tag">
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                {/* Arrow */}

                <span className="journey-arrow">
                  ↗
                </span>
              </motion.article>
            ))}

          </div>
        </div>

        {/* =================================================
            BOTTOM STATS
        ================================================= */}

        <motion.div
          className="about-stats"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
        >

         <div className="about-stat">
            <strong>BCA</strong>
            <span>Graduate</span>
          </div>

          <div className="stat-divider"></div>

          <div className="about-stat">
            <strong>PetHub</strong>
            <span>Final Semester Project</span>
          </div>

          <div className="stat-divider"></div>

          <div className="about-stat">
            <strong>3rd</strong>
            <span>PromptVerse Hackathon</span>
          </div>

          <div className="stat-divider"></div>

          <div className="about-stat">
            <strong>AI</strong>
            <span>Learning & Exploring</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;