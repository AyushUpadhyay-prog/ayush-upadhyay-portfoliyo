import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    year: "2024",
    period: "DURING BCA",
    title: "Web Development",
    subtitle: "WEBMATRIX 2.0",
    type: "WORKSHOP · 45 HOURS",
    description:
      "Participated in a 45-hour web development workshop during my BCA, strengthening my understanding of web technologies and establishing an early foundation in software development.",
    tags: ["Web Development", "Workshop"],
  },

  {
    number: "02",
    year: "2025",
    period: "DURING BCA",
    title: "Digital Marketing with AI",
    subtitle: "AI WORKSHOP",
    type: "WORKSHOP · 25 HOURS",
    description:
      "Explored digital marketing concepts and the practical use of artificial intelligence in digital workflows, expanding my understanding of how AI can support real-world tasks.",
    tags: ["Digital Marketing", "AI"],
  },

  {
    number: "03",
    year: "2025",
    period: "DURING BCA",
    title: "Prompt Engineering",
    subtitle: "PROMPTVERSE",
    type: "WORKSHOP · AI",
    description:
      "Explored prompt engineering techniques and learned how structured prompts can improve interaction with modern AI systems and support AI-assisted problem solving.",
    tags: ["Prompt Engineering", "Generative AI"],
  },

  {
    number: "04",
    year: "2025",
    period: "LEARNING & EXPLORATION",
    title: "AI, Machine Learning & Development",
    subtitle: "SELF-DIRECTED LEARNING",
    type: "TECHNICAL EXPLORATION",
    description:
      "Alongside my academic studies, I explored software development, machine learning, generative AI and modern development tools through experimentation, projects and continuous learning.",
    tags: ["AI / ML", "Development", "Learning"],
  },

  {
    number: "05",
    year: "2025",
    period: "HACKATHON",
    title: "Internship & Placement Recommendation Engine",
    subtitle: "COLLEGE HACKATHON",
    type: "TEAM PROJECT · TOP 10 / 24",
    description:
      "Worked with my team to develop an Internship & Placement Recommendation Engine, applying technology and problem-solving skills to a real-world student career problem.",
    tags: ["Hackathon", "Recommendation System"],
  },

  {
    number: "06",
    year: "2026",
    period: "Final Semester",
    title: "PetHub",
    subtitle: "BCA FINAL SEMESTER PROJECT",
    type: "MOBILE · WEB · BACKEND",
    description:
      "Developed PetHub as my BCA final semester project — a pet care and adoption platform built with React Native, Expo and Supabase, including grooming bookings, adoption workflows, authentication and an admin panel.",
    tags: ["React Native", "Expo", "Supabase"],
    featured: true,
  },

  {
    number: "07",
    year: "2026",
    period: "MILESTONE",
    title: "BCA Graduate",
    subtitle: "NEXT CHAPTER",
    type: "CAREER DEVELOPMENT",
    description:
      "Completed my Bachelor of Computer Applications and began focusing on strengthening my technical skills, building practical projects and preparing for professional opportunities.",
    tags: ["BCA", "Career", "Development"],
    featured: true,
  },
];


function Journey() {
  return (
    <section
      id="journey"
      className="journey-section"
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
            04 — JOURNEY
          </span>

          <h2>
            Learning,
            <br />
            building, evolving.
          </h2>

          <p className="journey-intro">
            A timeline of the experiences, experiments,
            projects and milestones that shaped my journey
            from a BCA student to a graduate preparing for
            the next stage of my career.
          </p>
        </motion.div>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="journey-timeline">

          {/* Progress Line */}

          <div
            className="journey-line"
            aria-hidden="true"
          />


          {journey.map((item, index) => (

            <motion.article
              className={`journey-item ${
                item.featured
                  ? "journey-item-featured"
                  : ""
              }`}
              key={`${item.year}-${item.title}`}

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
                margin: "-70px",
              }}

              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >

              {/* =================================================
                  YEAR
              ================================================= */}

              <div className="journey-year">

                <span>
                  {item.year}
                </span>

                <small>
                  {item.period}
                </small>

              </div>


              {/* =================================================
                  MARKER
              ================================================= */}

              <div className="journey-marker">

                <span className="journey-marker-number">
                  {item.number}
                </span>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="journey-content">

                <div className="journey-content-top">

                  <span className="journey-type">
                    {item.type}
                  </span>

                  {item.featured && (
                    <span className="journey-featured">
                      FEATURED
                    </span>
                  )}

                </div>


                <h3>
                  {item.title}
                </h3>


                <span className="journey-subtitle">
                  {item.subtitle}
                </span>


                <p>
                  {item.description}
                </p>


                {/* =================================================
                    TAGS
                ================================================= */}

                <div className="journey-tags">

                  {item.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;