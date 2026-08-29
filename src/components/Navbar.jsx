import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const navItems = [
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
    label: "Journey",
    href: "#journey",
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

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
const [profileOpen, setProfileOpen] = useState(false);




const handleProfileClick = () => {
  setProfileOpen(true);
};
const closeProfile = () => {
  setProfileOpen(false);
};
  /* =================================================
     CLOSE MENU
  ================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =================================================
     ESCAPE KEY
  ================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, []);


  /* =================================================
     BODY SCROLL LOCK
  ================================================= */

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [menuOpen]);

  useEffect(() => {
  const handleKeyDown = (event) => {

    if (event.key === "Escape") {
      closeMenu();
      closeProfile();
    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, []);

  /* =================================================
     ACTIVE SECTION
  ================================================= */

  useEffect(() => {

    const sections = document.querySelectorAll(
      "section[id]"
    );

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(
              entry.target.id
            );

          }

        });

      },
      {
        rootMargin:
          "-25% 0px -60% 0px",

        threshold: 0,
      }
    );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);


  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="navbar-inner">
        
          {/* =================================================
              LOGO
          ================================================= */}
          <div className="navbar-profile-wrapper">
           <button
    className="navbar-profile-button"
    onClick={handleProfileClick}
    aria-label="View profile photo"
  >
          <img
            src="./src/assets/profile.jpg"
            alt="Ayush Upadhyay"
            className="navbar-profile"
            onClick={handleProfileClick}
            
          />

          <span className="profile-status"></span>
       </button>
        </div>

          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Ayush Upadhyay - Home"
          >
            AU<span>.</span>
          </a>
          

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="navbar-links">

            {navItems.map((item) => (

              <a
                key={item.href}
                href={item.href}
                className={
                  activeSection ===
                  item.href.substring(1)
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>

            ))}

          </nav>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

       <div className="navbar-actions">

           {/* <a
              href="/resume.pdf"
              className="navbar-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span>↗</span>
            </a>  */}
             
            <a
              href="#contact"
              className="navbar-cta"
            >
              Let's Talk
              <span>↗</span>
            </a>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            className={`navbar-menu ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >

            <span />
            <span />

          </button>

        </div>


        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              id="mobile-navigation"
              className="mobile-navigation"

              initial={{
                opacity: 0,
                height: 0,
              }}

              animate={{
                opacity: 1,
                height: "auto",
              }}

              exit={{
                opacity: 0,
                height: 0,
              }}

              transition={{
                duration: 0.3,
              }}
            >

              <nav className="mobile-navigation-inner">

                {navItems.map(
                  (item, index) => (

                    <motion.a
                      key={item.href}
                      href={item.href}
                      className={
                        activeSection ===
                        item.href.substring(1)
                          ? "active"
                          : ""
                      }
                      onClick={closeMenu}

                      initial={{
                        opacity: 0,
                        x: -15,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay:
                          index * 0.04,
                      }}
                    >

                      <span>
                        0{index + 1}
                      </span>

                      {item.label}

                      <strong>
                        ↗
                      </strong>

                    </motion.a>

                  )
                )}


                {/* Mobile Resume */}

                <motion.a
                  href="/resume.pdf"
                  className="mobile-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}

                  initial={{
                    opacity: 0,
                    y: 10,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.25,
                  }}
                >
                  View Resume
                  <span>↗</span>
                </motion.a>

              </nav>

            </motion.div>

          )}
                {profileOpen && (
  <motion.div
    className="profile-fullscreen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={closeProfile}
  >

    <motion.img
      src="../assets/profile.jpg"
      alt="Ayush Upadhyay"
      className="profile-fullscreen-image"

      initial={{
        opacity: 0,
        scale: 0.8,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}

      onClick={(event) => {
        event.stopPropagation();
      }}
    />

    <button
      className="profile-close"
      onClick={closeProfile}
      aria-label="Close profile photo"
    >
      ×
    </button>

    <span className="profile-view-hint">
      Click outside to close
    </span>

  </motion.div>
)}
        </AnimatePresence>

      </header>
    </>
  );
}

export default Navbar;