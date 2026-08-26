import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "PetHub",
    status: "FEATURED",
    category: "FINAL SEMESTER PROJECT",

    description:
      "A pet care and adoption platform designed to connect pet owners with grooming services and adoption opportunities through a unified digital experience.",

    role:
      "Designed and developed the application architecture, user workflows and admin functionality.",

    features: [
      "Pet grooming booking system",
      "Pet adoption workflow",
      "User authentication",
      "Supabase database integration",
      "Admin management panel",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "JavaScript",
    ],

    links: {
      live: "https://pethub.vercel.app",
      github: "#",
    },

    featured: true,
  },

  {
    number: "02",
    title: "Internship & Placement Recommendation Engine",
    status: "HACKATHON",

    category: "MACHINE LEARNING",

    description:
      "A recommendation-engine project focused on helping students discover suitable internship and placement opportunities based on their skills, interests and profile.",

    role:
      "Worked with my team on developing and presenting a technology-based solution for student career recommendations.",

    features: [
      "Student profile analysis",
      "Skill-based recommendations",
      "Data preprocessing",
      "Recommendation logic",
      "Career-focused analysis",
    ],

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],

    links: {
      live: "#",
      github: "#",
    },

    featured: false,
  },

  {
    number: "03",
    title: "ForgeAI",
    status: "CONCEPT",

    category: "AI / CAREER TECHNOLOGY",

    description:
      "An AI-focused career platform concept exploring how artificial intelligence can assist users in discovering career opportunities and making better career-related decisions.",

    role:
      "Explored the product concept, user experience and possible AI-powered career workflows.",

    features: [
      "AI-powered career assistance",
      "Career exploration workflows",
      "AI integration concepts",
      "Modern web experience",
      "Future-ready career tools",
    ],

    technologies: [
      "React",
      "JavaScript",
      "AI",
      "APIs",
    ],

    links: {
      live: "https://rsgfol.readdy.co/",
      github: "#",
    },

    featured: true,
  },

  {
    number: "04",
    title: "AI Idea Validator",
    status: "EXPERIMENTAL",

    category: "AI / WEB APPLICATION",

    description:
      "An AI-focused product concept designed to help users evaluate startup and product ideas through structured input and AI-assisted analysis.",

    role:
      "Designed the idea-validation workflow and explored how generative AI could assist early-stage product analysis.",

    features: [
      "Idea input workflow",
      "AI-assisted analysis",
      "Product concept evaluation",
      "Structured user experience",
      "Generative AI integration",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Generative AI",
      "AI APIs",
    ],

    links: {
      live: "https://ai-idea-validator-la-f6os.bolt.host/",
      github: "#",
    },

    featured: true,
  },
];


function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
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
            03 — PROJECTS
          </span>

          <h2>
            Things I've
            <br />
            built.
          </h2>

          <p className="projects-intro">
            A selection of academic, experimental and
            product-focused projects where I applied
            development, AI and problem-solving skills
            to build practical solutions.
          </p>

        </motion.div>


        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className={`project-card ${
                project.featured
                  ? "project-card-featured"
                  : ""
              }`}

              key={project.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-70px",
              }}

              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >

              {/* =================================================
                  TOP
              ================================================= */}

              <div className="project-header">

                <div className="project-index">

                  <span>
                    {project.number}
                  </span>

                  <div />

                </div>


                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span
                    className={`project-status ${
                      project.featured
                        ? "featured"
                        : ""
                    }`}
                  >
                    {project.status}
                  </span>

                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="project-content">

                {/* Main Information */}

                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* Role */}

                  <div className="project-role">

                    <span>
                      MY ROLE
                    </span>

                    <p>
                      {project.role}
                    </p>

                  </div>


                  {/* Technologies */}

                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* =================================================
                    FEATURES
                ================================================= */}

                <div className="project-features">

                  <span className="project-features-label">
                    WHAT I BUILT
                  </span>

                  <ul>

                    {project.features.map(
                      (feature) => (

                        <li key={feature}>

                          <span className="feature-icon">
                            →
                          </span>

                          <span>
                            {feature}
                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </div>

              </div>


              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="project-footer">

                <span className="project-footer-text">
                  {project.featured
                    ? "Featured project"
                    : "Project exploration"}
                </span>


                <div className="project-links">

                  {project.links.live !== "#" && (

                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <span>↗</span>
                    </a>

                  )}


                  {project.links.github !== "#" && (

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;