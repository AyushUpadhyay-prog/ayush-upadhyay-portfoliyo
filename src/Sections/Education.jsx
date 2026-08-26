import { motion } from "framer-motion";

const education = [
  {
    year: "2026",
    level: "BACHELOR'S DEGREE",
    title: "Bachelor of Computer Applications",
    institute: "Lucky Institute of Professional Studies",
    location: "Jodhpur, Rajasthan",

    description:
      "Completed my BCA with a focus on computer applications, software development and emerging technologies. During my degree, I developed practical projects, participated in technical workshops and explored AI, machine learning and prompt engineering.",

    tags: [
      "Software Development",
      "Web Development",
      "AI & ML",
      "Practical Projects",
    ],

    featured: true,
  },

  {
    year: "2021",
    level: "SENIOR SECONDARY",
    title: "Class XII",
    institute: "SH MAHESH SR SEC SCH.",
    location: "Jodhpur, Rajasthan",
    board: "RBSE",
    percentage: "82.00%",
  },

  {
    year: "2019",
    level: "SECONDARY",
    title: "Class X",
    institute: "SH MAHESH SR SEC SCH.",
    location: "Jodhpur, Rajasthan",
    board: "RBSE",
    percentage: "64.17%",
  },
];


function Education() {

  const degree = education.find(
    (item) => item.featured
  );

  const schoolEducation = education.filter(
    (item) => !item.featured
  );


  return (
    <section
      id="education"
      className="education-section"
    >

      <div className="section-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="section-heading education-heading"
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
              07
            </span>

            <span>
              EDUCATION
            </span>

          </div>


          <h2>
            Building the
            <br />
            <span>foundation.</span>
          </h2>


          <p className="section-intro">
            My academic journey provided the foundation for
            exploring software development, artificial
            intelligence and practical technology projects.
          </p>

        </motion.div>


        {/* =================================================
            BCA FEATURED
        ================================================= */}

        <motion.article
          className="education-degree"
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
            duration: 0.7,
          }}
        >

          {/* Decorative glow */}

          <div className="education-glow" />


          {/* Year */}

          <div className="education-degree-year">
            <span>COMPLETED</span>

            <strong>
              {degree.year}
            </strong>
          </div>


          {/* Main content */}

          <div className="education-degree-content">

            <span className="education-type">
              {degree.level}
            </span>

            <h3>
              {degree.title}
            </h3>

            <div className="education-institute-row">

              <p className="education-institute">
                {degree.institute}
              </p>

              <span className="education-separator">
                /
              </span>

              <p className="education-location">
                {degree.location}
              </p>

            </div>


            <p className="education-description">
              {degree.description}
            </p>


            {/* Areas */}

            <div className="education-tags">

              {degree.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

          </div>


          {/* Degree indicator */}

          <div className="education-degree-mark">
            <span>
              BCA
            </span>
          </div>

        </motion.article>


        {/* =================================================
            SCHOOL EDUCATION
        ================================================= */}

        <div className="school-heading">

          <span>
            EARLIER EDUCATION
          </span>

          <div />

        </div>


        <div className="school-education">

          {schoolEducation.map((item, index) => (

            <motion.article
              className="school-card"
              key={item.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
            >

              {/* Top */}

              <div className="school-card-top">

                <span className="school-year">
                  {item.year}
                </span>

                <span className="school-board">
                  {item.board}
                </span>

              </div>


              {/* Content */}

              <span className="school-level">
                {item.level}
              </span>

              <h3>
                {item.title}
              </h3>

              <p className="school-institute">
                {item.institute}
              </p>

              <p className="school-location">
                {item.location}
              </p>


              {/* Result */}

              <div className="school-result">

                <span>
                  FINAL RESULT
                </span>

                <strong>
                  {item.percentage}
                </strong>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =================================================
            EDUCATION TIMELINE
        ================================================= */}

        <motion.div
          className="education-timeline"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <span className="timeline-point">
            2019
          </span>

          <span className="timeline-line" />

          <span className="timeline-point">
            2021
          </span>

          <span className="timeline-line" />

          <span className="timeline-point timeline-current">
            2026
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;