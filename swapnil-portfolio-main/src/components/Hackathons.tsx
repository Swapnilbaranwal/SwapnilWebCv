import "./styles/Hackathons.css";

type Hackathon = {
  result: string;
  rank: "winner" | "runner" | "finalist";
  title: string;
  detail: string;
  image: string;
};

const hackathons: Hackathon[] = [
  {
    result: "Winner",
    rank: "winner",
    title: "Eternal SwiftDidLoad iOS Hackathon 2026",
    detail:
      "First place at Eternal (Zomato)'s national iOS hackathon, shipping a polished Swift/SwiftUI product under time pressure.",
    image: "/images/hackathons/eternal-swiftdidload.jpg",
  },
  {
    result: "2nd Place",
    rank: "runner",
    title: "Agora Buildathon 2026",
    detail:
      "Second position with Kissan Saathi. Community partner Google for Developers, venue partner Paytm.",
    image: "/images/hackathons/agora-buildathon.jpg",
  },
  {
    result: "2nd Place",
    rank: "runner",
    title: "Build with Swytchcode 2026",
    detail:
      "1st Runner-up at Thoughtworks Gurgaon with Ledger, a voice-first AI COO agent for founders.",
    image: "/images/hackathons/swytchcode.jpg",
  },
  {
    result: "Finalist",
    rank: "finalist",
    title: "Microsoft × Agora Hackathon",
    detail: "Grand finalist in the Agora Conversational AI hackathon.",
    image: "/images/hackathons/microsoft-agora.jpg",
  },
];

const Hackathons = () => {
  return (
    <div className="hackathon-section section-container" id="hackathons">
      <h2>
        Hacka<span>thons</span>
      </h2>
      <div className="hackathon-grid">
        {hackathons.map((hackathon) => (
          <div className="hackathon-card" key={hackathon.title}>
            <div className="hackathon-image">
              <img src={hackathon.image} alt={hackathon.title} loading="lazy" />
              <span className={`hackathon-badge hackathon-${hackathon.rank}`}>
                {hackathon.result}
              </span>
            </div>
            <div className="hackathon-info">
              <h3>{hackathon.title}</h3>
              <p>{hackathon.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
