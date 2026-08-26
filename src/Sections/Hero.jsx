import { motion } from "framer-motion";
import HeroScene from "../components3D/HeroScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >

      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="hero-content">

        {/* Availability */}

        <motion.div
          className="hero-availability"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <span className="hero-status-dot" />

          <span>
            OPEN TO CAREER OPPORTUNITIES
          </span>

        </motion.div>


        {/* =================================================
            NAME
        ================================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
        >
          Ayush
          <span>
            Upadhyay
          </span>
        </motion.h1>


        {/* =================================================
            ROLE
        ================================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
        >
         AI-Focused Developer
          <span> · </span><br/>
          Building practical digital products with code & AI
          <span> · </span>
        </motion.h2>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.22,
          }}
        >
           BCA graduate with hands-on experience in web and mobile
  development, AI, machine learning and prompt engineering.
  I enjoy turning ideas into practical products and learning
  by building real projects.
        </motion.p>


        {/* =================================================
            QUICK STATS
        ================================================= */}

        <motion.div
          className="hero-stats"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >

          <div className="hero-stat">
            <strong>
              2026
            </strong>

            <span>
              BCA GRADUATE
            </span>
          </div>


          <div className="hero-stat-divider" />


          <div className="hero-stat">
            <strong>
              PetHub
            </strong>

            <span>
              FINAL PROJECT
            </span>
          </div>


          <div className="hero-stat-divider" />


          <div className="hero-stat">
            <strong>
              3rd
            </strong>

            <span>
              HACKATHON POSITION
            </span>
          </div>

        </motion.div>


        {/* =================================================
            CTA BUTTONS
        ================================================= */}

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.38,
          }}
        >

          <a
            href="#projects"
            className="primary-btn"
          >
            <span>
              View My Projects 
            </span>

            <span className="btn-arrow">
              →
            </span>
          </a>


          <a
            href="../public/resume.pdf"
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
              View Resume
            <span>
              ↗
            </span>
          </a>

        </motion.div>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <motion.div
          className="hero-socials"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >

          <a
            href="https://github.com/AyushUpadhyay-prog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>


          <a
            href="https://www.linkedin.com/in/ayush-upadhyay-26532a311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>


          <a
            href="https://linktr.ee/ayush_upadhyay12"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linktree
            <span>↗</span>
          </a>

        </motion.div>

      </div>


      {/* =================================================
          3D SCENE
      ================================================= */}

      <motion.div
        className="hero-3d"
        initial={{
          opacity: 0,
          scale: 0.82,
          x: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.1,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        <HeroScene />
      </motion.div>


      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <span className="scroll-line" />

      </motion.a>

    </section>
  );
}