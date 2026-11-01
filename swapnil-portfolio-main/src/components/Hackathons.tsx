import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import "./styles/Hackathons.css";

type Hackathon = {
  result: string;
  rank: "winner" | "runner" | "finalist";
  date: string;
  title: string;
  detail: string;
  images: string[];
  link: string;
};

const sortedPaytmImages = Object.entries(
  import.meta.glob<string>("/Resources/paymt's Ai hackathon/*.jpeg", {
    eager: true,
    import: "default",
  })
)
  .sort(([first], [second]) =>
    first.localeCompare(second, undefined, { numeric: true })
  )
  .map(([, image]) => image);

const paytmImages =
  sortedPaytmImages.length > 2
    ? [
        sortedPaytmImages[2],
        ...sortedPaytmImages.slice(0, 2),
        ...sortedPaytmImages.slice(3),
      ]
    : sortedPaytmImages;

const hackathons: Hackathon[] = [
  {
    result: "Winner",
    rank: "winner",
    date: "August",
    title: "Eternal SwiftDidLoad iOS Hackathon 2026",
    detail:
      "First place at Eternal (Zomato)'s national iOS hackathon, shipping a polished Swift/SwiftUI product under time pressure.",
    images: ["/images/hackathons/eternal-swiftdidload.jpg"],
    link: "https://lnkd.in/p/dzBrtSmV",
  },
  {
    result: "2nd Place",
    rank: "runner",
    date: "September",
    title: "Agora Buildathon 2026",
    detail:
      "Second position with Kissan Saathi. Community partner Google for Developers, venue partner Paytm.",
    images: ["/images/hackathons/agora-buildathon.jpg"],
    link: "https://lnkd.in/p/d423AABa",
  },
  {
    result: "Finalist",
    rank: "finalist",
    date: "Late September",
    title: "Microsoft × Agora Hackathon",
    detail: "Grand finalist in the Agora Conversational AI hackathon.",
    images: ["/images/hackathons/microsoft-agora.jpg"],
    link: "https://lnkd.in/p/gVBbRnq9",
  },
  {
    result: "2nd Place",
    rank: "runner",
    date: "Early October",
    title: "Build with Swytchcode 2026",
    detail:
      "1st Runner-up at Thoughtworks Gurgaon with Ledger, a voice-first AI COO agent for founders.",
    images: ["/images/hackathons/swytchcode.jpg"],
    link: "https://lnkd.in/p/gVBbRnq9",
  },
  {
    result: "Finalist",
    rank: "finalist",
    date: "31 October",
    title: "Paytm AI Hackathon 2026",
    detail:
      "Built Paytm Munshi, a voice-first AI business partner for local shopkeepers, with customer insights and everyday business tools.",
    images: paytmImages,
    link: "https://lnkd.in/p/gVBbRnq9",
  },
];

const HackathonCard = ({ hackathon }: { hackathon: Hackathon }) => {
  const [activeImage, setActiveImage] = useState(0);
  const imageCount = hackathon.images.length;
  const changeImage = (offset: number) => {
    setActiveImage((current) => (current + offset + imageCount) % imageCount);
  };

  return (
    <article className="hackathon-card">
      <div
        className={`hackathon-image${imageCount > 1 ? " hackathon-image-carousel" : ""}`}
        role={imageCount > 1 ? "group" : undefined}
        aria-roledescription={imageCount > 1 ? "carousel" : undefined}
        aria-label={imageCount > 1 ? `${hackathon.title} photos` : undefined}
      >
        <a
          className="hackathon-image-link"
          href={hackathon.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${hackathon.title} on LinkedIn, photo ${activeImage + 1} of ${imageCount}`}
        >
          <img
            src={hackathon.images[activeImage]}
            alt={`${hackathon.title}, photo ${activeImage + 1} of ${imageCount}`}
            loading="lazy"
          />
        </a>
        <span className={`hackathon-badge hackathon-${hackathon.rank}`}>
          {hackathon.result}
        </span>
        {imageCount > 1 && (
          <>
            <button
              className="hackathon-carousel-button hackathon-carousel-previous"
              type="button"
              onClick={() => changeImage(-1)}
              aria-label={`Previous ${hackathon.title} photo`}
            >
              <MdChevronLeft aria-hidden="true" />
            </button>
            <button
              className="hackathon-carousel-button hackathon-carousel-next"
              type="button"
              onClick={() => changeImage(1)}
              aria-label={`Next ${hackathon.title} photo`}
            >
              <MdChevronRight aria-hidden="true" />
            </button>
            <span className="hackathon-carousel-count" aria-live="polite">
              {activeImage + 1} / {imageCount}
            </span>
          </>
        )}
      </div>
      <div className="hackathon-info">
        <span className="hackathon-date">{hackathon.date}</span>
        <h3>
          <a
            href={hackathon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hackathon.title}
          </a>
        </h3>
        <p>{hackathon.detail}</p>
        <a
          className="hackathon-link"
          href={hackathon.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on LinkedIn <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const Hackathons = () => {
  return (
    <div className="hackathon-section section-container" id="hackathons">
      <h2>
        Hacka<span>thons</span>
      </h2>
      <div className="hackathon-grid">
        {hackathons.map((hackathon) => (
          <HackathonCard hackathon={hackathon} key={hackathon.title} />
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
