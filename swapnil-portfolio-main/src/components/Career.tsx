import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Intern → iOS Developer</h4>
                <h5>Interra Information Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built the Keytalk app from scratch in SwiftUI with full UI and API
              integration, secure certificate installation and reusable
              components. Fixed UI/UX and storyboard issues across the UIKit and
              macOS versions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Developer</h4>
                <h5>Neuronimbus</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Shipped the Nikon production app with optimised product search,
              CoreLocation, Keychain, push notifications and analytics.
              Re-architected TGWC with MVVM and built the Neuro AI chat app from
              scratch with multilingual and voice support.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Developer, IoT & AI</h4>
                <h5>Vestel International</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Integrated Tuya IoT (MQTT) and BLE for real-time device control,
              built Blood Pressure & Respiratory tracking for the Vestel Smart
              Watch, led the UIKit → SwiftUI migration and built an LLM-based
              assistant for IoT troubleshooting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior iOS Developer (SDE 2)</h4>
                <h5>Sunday Labs · Credgenics</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Shipped real-time field-agent tracking and screenshot prevention in
              CG Collect, built the Case View module, Explore Loans and Rewards,
              fixed React Native performance bottlenecks, and am building an
              in-house AI chatbot and LLM-driven automations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
