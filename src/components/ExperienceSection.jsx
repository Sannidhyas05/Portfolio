import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ExperienceSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof document !== "undefined") {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
      }
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);

    if (typeof document !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Frontend Intern",
      company: "Raasa Karts",
      type: "Remote",
      location: "Noida, Uttar Pradesh",
      duration: "June 2025 - July 2025",
      logo: "/Raasa.png",
      description: [
        "Developed and deployed production-ready features in Java (Android Studio), boosting user retention by 12% across two live app releases",
        "Optimized app stability by fixing critical bugs, refactoring legacy code, and ensuring 100% SDK compliance for cross-version performance.",
      ],
      skills: [
        "React",
        "JavaScript",
        "Redux",
        "UI/UX Design",
        "Debugging",
        "Data Handling",
        "Scrollable Lists",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Aumbram",
      type: "Remote",
      location: "Noida, Uttar Pradesh",
      duration: "Jan 2025 – Mar 2025",
      logo: "/aumbram.png",
      description: [
        "Independently built the MVP of a startup product using React Native, Expo, and JavaScript, delivering a fully functional cross-platform application.",
        "Designed and implemented core features and UI/UX workflows, ensuring seamless performance on Android devices.",
        "Collaborated with backend APIs to fetch and display dynamic data such as posts, projects, and team information in the mobile app.",
      ],
      skills: [
        "React Native",
        "Expo",
        "JavaScript",
        "UI/UX Design",
        "Frontend Development",
        "State Management",
        "Debugging",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: {
      scaleY: 0,
      originY: 0,
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const experienceItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
        delay: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const skillContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="experience" className="py-30 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 py-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-base text-foreground/80 mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional journey
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line - responsive positioning */}
          <motion.div
            className="absolute left-6 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
          />

          <motion.div
            className="space-y-8 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row"
                variants={experienceItemVariants}
              >
                {/* Company Logo instead of dot */}
                <motion.div
                  className="absolute left-2 md:left-2 w-8 h-8 bg-background rounded-full border-2 border-gray-800 dark:border-gray-200 shadow-lg mt-0 transition-colors duration-300 z-10 flex items-center justify-center overflow-hidden"
                  variants={dotVariants}
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-6 h-6 object-contain"
                    style={
                      exp.company === "CRED"
                        ? {
                            filter: isDarkMode ? "invert(1)" : "none",
                            transition: "filter 0.3s ease",
                          }
                        : {}
                    }
                  />
                </motion.div>

                {/* Content with enhanced animations - responsive layout */}
                <div className="ml-12 md:ml-12 flex-1 flex flex-col md:flex-row">
                  {/* Left side - Title with slide animation - responsive width */}
                  <motion.div
                    className="flex-shrink-0 w-full md:w-72 md:pr-12 mb-4 md:mb-0"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {exp.title}
                    </motion.h3>
                  </motion.div>

                  {/* Right side - All other details with staggered animations */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    <motion.h4
                      className="text-lg font-semibold text-primary mb-1 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                    >
                      {exp.company}
                    </motion.h4>

                    <motion.div
                      className="mb-2 text-left"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                    >
                      <span className="text-sm text-muted-foreground">
                        {exp.duration}
                      </span>
                    </motion.div>

                    <motion.div
                      className="text-sm text-muted-foreground mb-4 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                    >
                      {exp.type} • {exp.location}
                    </motion.div>

                    <motion.div
                      className="text-muted-foreground text-sm mb-3 leading-relaxed text-left max-w-2xl"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    >
                      {exp.description.map((bullet, bulletIndex) => (
                        <p key={bulletIndex} className="mb-2">
                          • {bullet}
                        </p>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-1.5 "
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="bg-background border rounded-md font-medium text-xs py-1 px-2.5 sm:py-1.5 sm:px-3 hover:bg-accent transition-all duration-300 flex items-center gap-1 sm:gap-1.5 group cursor-pointer"
                          variants={skillVariants}
                          custom={skillIndex}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
