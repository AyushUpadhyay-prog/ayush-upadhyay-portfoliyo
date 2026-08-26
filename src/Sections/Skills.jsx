import { motion } from "framer-motion";

const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    shortTitle: "Frontend",
    description:
      "Building responsive web and mobile interfaces with modern JavaScript-based technologies and component-driven development.",

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Native",
      "Expo",
      "Vite",
    ],

    focus: "INTERFACES & USER EXPERIENCE",
  },

  {
    number: "02",
    title: "Backend & Data",
    shortTitle: "Backend",
    description:
      "Working with backend services, databases, authentication systems and APIs to support practical application workflows.",

    skills: [
      "Supabase",
      "Firebase",
      "REST APIs",
      "SQL",
      "Authentication",
      "CRUD",
    ],

    focus: "DATA & APPLICATION LOGIC",
  },

  {
    number: "03",
    title: "AI & Machine Learning",
    shortTitle: "AI / ML",
    description:
      "Exploring machine learning, generative AI and prompt engineering through practical experimentation and project-based learning.",

    skills: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Generative AI",
      "Prompt Engineering",
    ],

    focus: "AI & INTELLIGENT SYSTEMS",
  },

  {
    number: "04",
    title: "Tools & Workflow",
    shortTitle: "Workflow",
    description:
      "Using modern development tools for version control, API testing, project development and application deployment.",

    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Vercel",
      "EAS",
      "Postman",
    ],

    focus: "DEVELOPMENT & DEPLOYMENT",
  },
];


function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
    >

      <div className="section-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="section-heading"

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
            margin: "-80px",
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <span>
            02 — SKILLS
          </span>

          <h2>
            Technologies I
            <br />
            work with.
          </h2>

          <p className="skills-intro">
            A practical overview of the technologies and tools
            I have worked with through academic projects,
            workshops and independent development.
          </p>

        </motion.div>


        {/* =================================================
            SKILL GRID
        ================================================= */}

        <div className="skills-grid">

          {skillCategories.map(
            (category, index) => (

              <motion.article
                className="skill-card"
                key={category.title}

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
                  margin: "-60px",
                }}

                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}

                whileHover={{
                  y: -5,
                }}
              >

                {/* =================================================
                    CARD TOP
                ================================================= */}

                <div className="skill-card-top">

                  <span className="skill-number">
                    {category.number}
                  </span>

                  <span className="skill-count">
                    {String(
                      category.skills.length
                    ).padStart(2, "0")}{" "}
                    SKILLS
                  </span>

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3>
                  {category.title}
                </h3>

                <span className="skill-focus">
                  {category.focus}
                </span>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p>
                  {category.description}
                </p>


                {/* =================================================
                    SKILL LIST
                ================================================= */}

                <div className="skill-list">

                  {category.skills.map(
                    (skill) => (

                      <motion.span
                        key={skill}

                        whileHover={{
                          y: -2,
                        }}
                      >
                        {skill}
                      </motion.span>

                    )
                  )}

                </div>


                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div className="skill-card-bottom">

                  <span>
                    {category.shortTitle}
                  </span>

                  <span className="skill-arrow">
                    →
                  </span>

                </div>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Skills;