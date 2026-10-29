import { MdArrowOutward } from "react-icons/md";
import "./styles/AIProjects.css";

type AIProject = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
};

const github = "https://github.com/Swapnilbaranwal";

const aiProjects: AIProject[] = [
  {
    title: "Ledger",
    tagline: "AI COO with a Chargeback Detective",
    description:
      "Voice-first iOS agent that briefs founders and investigates PayPal disputes, gathering evidence from Gmail and Notion, then acting through Jira and Slack with approval gates.",
    tags: ["SwiftUI", "Siri", "LangGraph", "Agents"],
    link: `${github}/Ledger`,
  },
  {
    title: "Candor",
    tagline: "AI travel companion for India",
    description:
      "Point it at a price tag, menu or ride quote and it tells foreign visitors the fair price in their own language, with an on-device agent and Gemini via Cloud Run.",
    tags: ["SwiftUI", "Gemini", "Vision", "Cloud Run"],
    link: `${github}/Candor`,
  },
  {
    title: "Ghumlo",
    tagline: "GenAI cultural compass",
    description:
      "Helps travellers discover Indian destinations and hidden gems, with live LLM calls to Gemini and automatic Groq fallback.",
    tags: ["React", "Gemini", "Groq", "Vitest"],
    link: `${github}/Ghumlo`,
  },
  {
    title: "AI Image Studio",
    tagline: "Caption, edit and search images",
    description:
      "AI captions, natural-language edit plans applied with Pillow, full revision history and embeddings-based semantic search.",
    tags: ["Python", "OpenAI", "Embeddings", "Streamlit"],
    link: `${github}/AI-Image-Studio`,
  },
  {
    title: "Generative AI Chatbot",
    tagline: "Multimodal assistant",
    description:
      "Chat with image understanding, spoken TTS replies and contextual memory across the conversation.",
    tags: ["LLM", "Vision", "TTS", "Memory"],
  },
  {
    title: "Private Local LLM",
    tagline: "Fully offline chatbot",
    description:
      "Custom chatbot running entirely on a local server with no external APIs, so data never leaves the machine.",
    tags: ["Llama", "Local LLM", "Python"],
  },
  {
    title: "Voice Cloning + TTS",
    tagline: "Realistic cloned speech",
    description:
      "Python pipeline that generates realistic cloned voice audio from text.",
    tags: ["Python", "Voice AI", "TTS"],
  },
  {
    title: "Churn Prediction",
    tagline: "ML customer intelligence",
    description:
      "Model that predicts customer churn for single and bulk inputs, served through a REST API.",
    tags: ["Python", "Scikit-learn", "Flask"],
    link: `${github}/CHURN_ML`,
  },
  {
    title: "Cooking Planner",
    tagline: "AI meal-planning micro-app",
    description:
      "Generates a breakfast, lunch and dinner plan for your day with a grocery list, substitutions and budget checks.",
    tags: ["JavaScript", "LLM", "Prompting"],
    link: `${github}/cooking-planner`,
  },
  {
    title: "Rapid Response Dispatch",
    tagline: "Emergency logistics for New Delhi",
    description:
      "Models the city as a weighted road network to assign the nearest responders and analyse coverage and bottlenecks.",
    tags: ["Python", "NetworkX", "Dijkstra"],
    link: `${github}/RapidResponseDispatch_NewDelhi`,
  },
];

const AIProjects = () => {
  return (
    <div className="ai-section section-container" id="ai-projects">
      <h2>
        AI <span>Projects</span>
      </h2>
      <p className="ai-intro">
        Agents, LLM apps, voice and ML experiments, most of them open source on
        GitHub.
      </p>
      <div className="ai-grid">
        {aiProjects.map((project, index) => {
          const content = (
            <>
              <div className="ai-card-top">
                <span className="ai-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.link && (
                  <span className="ai-card-link">
                    <MdArrowOutward />
                  </span>
                )}
              </div>
              <h3>{project.title}</h3>
              <h4>{project.tagline}</h4>
              <p>{project.description}</p>
              <div className="ai-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </>
          );
          return project.link ? (
            <a
              className="ai-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              key={project.title}
            >
              {content}
            </a>
          ) : (
            <div className="ai-card" key={project.title}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIProjects;
