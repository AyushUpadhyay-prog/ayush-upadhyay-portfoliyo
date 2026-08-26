import { motion } from "framer-motion";

const achievements = [
  {
    number: "01",
      title: "Hackathon — 3rd Position",
      type: "Achievement",
      year: "During BCA",
      description:
      "Worked with my team on an Internship & Placement Recommendation Engine and secured 3rd position in the hackathon organized during the Promptverse workshop.",
      highlight: "3rd Position",
    featured: true,
  },

  {
    number: "02",
    title: "PetHub",
    type: "FINAL SEMESTER PROJECT",
    year: "2026",
    description:
      "Built PetHub as my BCA final-semester project — a pet care and adoption platform featuring grooming bookings, adoption workflows, authentication and an admin panel.",
    highlight: "React Native • Expo • Supabase",
    featured: true,
  },

  {
    number: "03",
    title: "AI & Prompt Engineering",
    type: "TECHNICAL EXPLORATION",
    year: "BCA",
    description:
      "Explored generative AI, machine learning concepts and prompt engineering through workshops, practical experimentation and AI-focused projects.",
    highlight: "AI Exploration",
    featured: false,
  },

  {
    number: "04",
    title: "Hands-on Development",
    type: "PROJECT-BASED LEARNING",
    year: "BCA",
    description:
      "Applied academic concepts by building practical applications across web development, mobile development, backend services and AI-focused ideas.",
    highlight: "Build • Learn • Improve",
    featured: false,
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="section-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="section-heading achievements-heading"
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
              06
            </span>

            <span>
              MILESTONES
            </span>
          </div>

          <h2>
            Things I built,
            <br />
            <span>things I achieved.</span>
          </h2>

          <p className="section-intro">
            A snapshot of the projects, achievements and
            technical experiences that shaped my journey
            during BCA.
          </p>
        </motion.div>


        {/* =================================================
            FEATURED ACHIEVEMENTS
        ================================================= */}

        <div className="achievements-grid">

          {achievements.map(
            (achievement, index) => (

              <motion.article
                key={achievement.title}
                className={`achievement-card ${
                  achievement.featured
                    ? "achievement-featured"
                    : ""
                }`}
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

                {/* Card glow */}

                <div className="achievement-glow" />


                {/* Top */}

                <div className="achievement-top">

                  <span className="achievement-number">
                    {achievement.number}
                  </span>

                  <span className="achievement-year">
                    {achievement.year}
                  </span>

                </div>


                {/* Type */}

                <span className="achievement-type">
                  {achievement.type}
                </span>


                {/* Title */}

                <h3>
                  {achievement.title}
                </h3>


                {/* Description */}

                <p>
                  {achievement.description}
                </p>


                {/* Highlight */}

                <div className="achievement-footer">

                  <span className="achievement-highlight">
                    <span className="highlight-dot" />

                    {achievement.highlight}
                  </span>

                  <span className="achievement-arrow">
                    ↗
                  </span>

                </div>

              </motion.article>

            )
          )}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          className="achievement-summary"
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
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="summary-line" />

          <p>
            My approach is simple:
            <strong> learn → build → experiment → improve.</strong>
          </p>

          <span className="summary-line" />
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;