import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>iOS & IoT</h3>
              <h4>Native Apps for Real Devices</h4>
              <p>
                Shipping production iOS apps in Swift and SwiftUI across fintech,
                IoT and e-commerce, and connecting them to smart devices over BLE
                and MQTT.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Swift</div>
                <div className="what-tags">SwiftUI</div>
                <div className="what-tags">UIKit</div>
                <div className="what-tags">Combine</div>
                <div className="what-tags">CoreData</div>
                <div className="what-tags">MVVM</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">CoreBluetooth</div>
                <div className="what-tags">MQTT</div>
                <div className="what-tags">Tuya IoT SDK</div>
              </div>
            </div>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI ENGINEERING</h3>
              <h4>Generative AI & Agents</h4>
              <p>
                Adding AI where it solves real problems: chatbots, agents, RAG,
                voice and workflow automation, built into apps people already use.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">OpenAI</div>
                <div className="what-tags">Gemini</div>
                <div className="what-tags">Llama</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">Agents</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Voice / TTS</div>
                <div className="what-tags">Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
