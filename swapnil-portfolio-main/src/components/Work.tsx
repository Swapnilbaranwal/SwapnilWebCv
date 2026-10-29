import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaApple } from "react-icons/fa6";

type Project = {
  title: string;
  category: string;
  description: string;
  tools: string;
  image?: string;
  icon?: string;
  screenshots?: string[];
  link?: string;
};

const appShots = (name: string) => [1, 2, 3].map((n) => `/images/apps/${name}-${n}.jpg`);

const projects: Project[] = [
  {
    title: "CG Collect",
    category: "Fintech · Credgenics",
    description:
      "Collections app for field agents with real-time location tracking, screenshot prevention, Case View, Explore Loans and Rewards. Live on the App Store.",
    tools: "Swift, SwiftUI, React Native, CoreLocation",
    icon: "/images/apps/cgcollect-icon.jpg",
    screenshots: appShots("cgcollect"),
    link: "https://apps.apple.com/in/app/cg-collect/id6759031969",
  },
  {
    title: "Fix My Score",
    category: "Fintech · Credgenics",
    description:
      "Consumer credit-score product in the Credgenics suite, kept in sync with the web platform.",
    tools: "Swift, React Native, REST APIs",
    icon: "/images/apps/fixmyscore-icon.jpg",
    screenshots: appShots("fixmyscore"),
    link: "https://apps.apple.com/in/app/fixmyscore/id6747953903",
  },
  {
    title: "Vestel Smart Watch",
    category: "Health Wearable · Vestel",
    description:
      "Blood Pressure and Respiratory tracking with interactive health graphs and reusable SwiftUI components.",
    tools: "SwiftUI, BLE, CoreBluetooth, Charts",
  },
  {
    title: "Vestel Smart Home",
    category: "IoT · Moctor · AIDA · Akıllı Yaşam · Veezy",
    description:
      "Real-time appliance control and MQTT automation, a UIKit → SwiftUI migration, and an LLM assistant for IoT troubleshooting.",
    tools: "Swift, SwiftUI, Tuya IoT SDK, MQTT, LLM",
  },
  {
    title: "MyNikon",
    category: "E-Commerce · Nikon India · Neuronimbus",
    description:
      "Production shopping app with optimised product listing and search, push notifications and analytics.",
    tools: "Swift, UIKit, CoreLocation, Keychain",
    icon: "/images/apps/nikon-icon.jpg",
    screenshots: appShots("nikon"),
    link: "https://apps.apple.com/in/app/mynikon-cameras-workshops/id1613519297",
  },
  {
    title: "TGWC",
    category: "Booking & Payments · Neuronimbus",
    description:
      "Re-architected with MVVM, fixed JSON parsing and models, and delivered booking, payments and new modules.",
    tools: "Swift, MVVM, REST APIs",
  },
  {
    title: "Neuro AI Chatbot",
    category: "Conversational AI · Neuronimbus",
    description:
      "AI chat app built from scratch with multilingual and voice support.",
    tools: "Swift, LLM APIs, Speech, TTS",
  },
  {
    title: "Keytalk",
    category: "Security · Interra",
    description:
      "Built from scratch in SwiftUI with secure certificate installation, across iOS and macOS.",
    tools: "SwiftUI, UIKit, macOS, Certificates",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="carousel-title">
                          {project.icon && (
                            <img
                              className="carousel-app-icon"
                              src={project.icon}
                              alt={`${project.title} app icon`}
                            />
                          )}
                          <h4>{project.title}</h4>
                        </div>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            className="carousel-store-link"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                          >
                            <FaApple /> View on App Store <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.screenshots ? (
                        <a
                          className="work-screens"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="disable"
                        >
                          {project.screenshots.map((shot, shotIndex) => (
                            <img
                              key={shot}
                              src={shot}
                              alt={`${project.title} screenshot ${shotIndex + 1}`}
                              loading="lazy"
                            />
                          ))}
                        </a>
                      ) : project.image ? (
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
                      ) : (
                        <div className="work-poster" data-index={index % 4}>
                          <span className="work-poster-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
