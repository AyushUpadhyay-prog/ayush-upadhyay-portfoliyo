import { motion } from "framer-motion";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-upadhyay-26532a311",
  },
  {
    label: "GitHub",
    href: "https://github.com/AyushUpadhyay-prog",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/ayush_upadhyay12",
  },
];


function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =================================================
            TOP
        ================================================= */}

        <motion.div
          className="footer-main"
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

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
              aria-label="Back to home"
            >
              AU<span>.</span>
            </a>

            <p>
              BCA graduate exploring software development,
              artificial intelligence and practical technology
              through projects and continuous learning.
            </p>

            <span className="footer-status">
              <span className="footer-status-dot" />

              Open to opportunities
            </span>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <nav className="footer-navigation">

              {navigation.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </a>

              ))}

            </nav>

          </div>


          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              CONNECT
            </span>

            <div className="footer-social">

              {socialLinks.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {item.label}
                  </span>

                  <span className="footer-arrow">
                    ↗
                  </span>
                </a>

              ))}

            </div>

          </div>

        </motion.div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="footer-divider" />


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <span>
            © {currentYear} Ayush Upadhyay
          </span>

          <span className="footer-built">

            Built with

            <span className="footer-tech">
              React
            </span>

            ·

            <span className="footer-tech">
              Framer Motion
            </span>

          </span>

          <a
            href="#home"
            className="footer-top"
          >
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;