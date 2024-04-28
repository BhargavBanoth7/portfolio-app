import React from "react";
import './Resume.css';
import backgroundImage from "../images/trading_bgd.png"

// page styling for layout of resume page
const containerStyle = {
  position: 'relative',
  minHeight: '100vh',
  background: `url(${backgroundImage}) center/cover no-repeat`,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
};

// Resume() returns the page content on /resume
function Resume() {
  return (
  <div className="resume" style={containerStyle}>
    <div style={overlayStyle}></div>
    <div style={contentStyle}>
    <section className="section">
      <h2>Professional Summary</h2>
      <p>I like to work in an organization that can provide a variety of opportunities that allow me to expand
        skills and knowledge while working towards achieving the organizational goals. <br/>
        Currently I am an <b>SHOP ASISSTANT & TEAM LEAD</b> Responsible Stocker with a history of being punctual and dependable.
        Determined and experienced in product inventory and safety procedures.
        <b> CONSOLE OPERATOR</b> Sharpeyed Console Operator capable of observing and reporting suspicious persons and activities. 
        <br/>Committed to enforcing all rules, regulations, policies, and procedures. Hands-on experience responding to
        emergency situations that require security assistance. Comfortable with Constantly standing or walking
        and running, as needed. In-depth criminal law and crime prevention knowledge with superb investigative
        skills.
        <br/>
        Experienced <b>Team Member</b> bringing outstanding performance working with others to meet common goals. 
        Familiar with project management and workflow optimization. 
        Eager to bring knowledge to <b>support business and customer needs.</b>
      </p>
    </section><br/>

    <section className="section">
      <h2>Career History</h2>
      <ul className="list">
        <li>
          <div className="item">
            <h4>Team member(ELEVEN) from 2022-03 - 2023-08</h4>
            <ul>
              <li>
                <p>Duties at 7 eleven are stock check, customer service, stock replenishment,
                  product expiry check.</p>
              </li>
              <li>
                <p>Learned all required tasks quickly to maximize performance.</p>
              </li>
              <li>
                <p>Kept work areas clean, organized, and safe to promote efficiency and team
                  safety.</p>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="item">
            <h4>Food security Team member(KFC) from 2022-11 - 2023-03</h4>
            <ul>
              <li>
                <p>Making the world-famous chicken at the highest quality standards.</p>
              </li>
              <li>
                <p>Partnering with other Team.</p>
              </li>
              <li>
                <p>Members to manage the products needs to fulfill guest orders.</p>
              </li>
              <li>
                <p>Providing a top-notch guest experience that includes friendly interactions, fresh
                  meals and a commitment to cleanliness.</p>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="item">
            <h4>Customer Service Representative(SquareYards, Hyderabad, Telangana) from 2021-07 - 2021-12</h4>
            <ul>
              <li>
                <p>Answered customer telephone calls promptly to avoid on-hold wait times.</p>
              </li>
              <li>
                <p>Responded to customer requests for products, services, and company
                  information.</p>
              </li>
              <li>
                <p>Updated account information to maintain customer records.</p>
              </li>
              <li>
                <p>Answered constant flow of customer calls with minimal wait times.</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section><br/>

    <section className="section">
      <h2>Skills</h2>
      <ul>
        <li>Critical Thinking</li>
        <li>Technical Support</li>
        <li>Proficient in Programming</li>
        <li>Stock management</li>
        <li>Customer service expert</li>
        <li>Decision-Making</li>
        <li>Multitasking Abilities</li>
        <li>Cooperative team member</li>
      </ul>
    </section><br/>

    <section className="section">
      <h2>Publications/Notable Outputs</h2>
      <ul>
        <li>
          <p><b>Trading Stocks:</b> I Love to spend some time on markets and their movements. In my free time u
              would see me Trading Stocks.</p>
        </li>
        <li>
          <p><b>Trading Stocks:</b>.
          </p>
        </li>
        <li>
          <p><b>Trading Stocks:</b>.
          </p>
        </li>
      </ul>
    </section><br/>

    <section className="section">
      <h2>Qualifications</h2>
      <ul className="list">
        <li>
          <div className="item">
            <h4>Master of Information Technology: Business Analysis</h4>
            <p>2022-07 - Current &nbsp; Queensland University of Technology - Brisbane, QLD</p>
          </div>
        </li>
        <li>
          <div className="item">
            <h4>Bachelor of Engineering: Electronic Instrumentation Engineering,
              Science</h4>
            <p>2017-08 - 2021-08 &nbsp; VNVJIET - Hyderabad</p>
          </div>
        </li>
      </ul>
    </section>
    </div>
  </div>  
  );
}

export default Resume;
