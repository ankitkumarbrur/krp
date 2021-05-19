import React from "react";
import "./styles/info.scss";

const Info = () => {
  return (
    <section className="info-section">

      <div className="info-first">
      <div className = "info-first-left">
          <div className = "info-title">
            <div className ="info-title-accent-square"></div>
            <h2 className = "info-title-heading"> kaulson <br/>what we do. </h2>
            <div className = "info-title-black-square"> </div>
          </div>

          <div className = "info-workshop">
            <h3>workshop services</h3>
            <p className = "info-workshop-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

            <div className = "info-apparels-image">
              <img />
            </div>

          </div>

      </div>


      <div className = "info-first-right">
          {/* <div className = "info-workshop"> */}

            <div className="info-apparels">


              <div className = "info-workshop-image">
                <img/>
              </div>
              <div>
              <h3>apparels</h3>
              <p className = "info-workshop-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
              </div>
            </div>
          {/* </div> */}
      </div>

      </div>

      <div className="info-second">

        <div className="info-second-left">
          <div className="info-second-black-square"></div>

          <div className="info-projects">
            <h3>projects</h3>
            <p className = "info-projects-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            <button> read more </button>
          </div>
        </div>

        <div className="info-second-right">
          <div className="info-projects-card">
            <div className="info-projects-card-text">
              <h3>Curabitur arcu erat accumsan id imperdiet et porttitor.</h3>
              <div className="info-projects-card-image">
                <img src="https://unsplash.com/photos/XyEshzxsas8/download?force=true&w=1920"/>
              </div>
            </div>
          </div>

          <div className="info-projects-image">
            <img src="https://unsplash.com/photos/j3ukSGrVSw0/download?force=true&w=1920" />
          </div>
        </div>

      </div>
    
      {/* <div className="info-title"> */}
      {/* </div> */}
      
      {/* <div className = "">
        <div className = "">
          <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"/>
        </div>
      </div> */}
    </section>
  );
};

export default Info;