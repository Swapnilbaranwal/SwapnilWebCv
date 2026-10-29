import "./styles/Education.css";

const education = [
  {
    degree: "Associate of Science in Artificial Intelligence",
    school: "Saras AI Institute",
    years: "2024 – 2026",
    score: "",
  },
  {
    degree: "Master of Computer Applications",
    school: "Galgotias University",
    years: "2020 – 2022",
    score: "CGPA 8.65",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Mahatma Jyotiba Phule University",
    years: "2016 – 2019",
    score: "70%",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <h2>
        Edu<span>cation</span>
      </h2>
      <div className="education-list">
        {education.map((item) => (
          <div className="education-item" key={item.degree}>
            <span className="education-years">{item.years}</span>
            <div className="education-main">
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
            </div>
            <span className="education-score">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
