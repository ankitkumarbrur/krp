import React from "react";

import "./contactus.scss";

const Contactus = () => {
  return (
    <section className="contactus">
      <div className ="contactus-left">
          
          <div className="contactus-address">
              <h2>address</h2>
              <p>
                  A-34 Naraina Industrial Area Phase 2<br/>
                  Naraina, New Delhi, Delhi
              </p>

          </div>
          <div className="contactus-details">
              <h2>email & phone </h2>
              <p>
                  email@krp.com <br/>
                  978928929745
              </p>
          </div>

      </div>
      
      <div className ="contactus-right">
        <div className = "contactus-form">
          <div className= "contactus-form-heading">
              <h1>SEND A MESSAGE</h1>
          </div>
          
          <div class="form_field">

            <div class="input_group w_50">
              <input type="text" class="input" required />
              <label class="placeholder">First Name</label>
            </div>
      
            <div class="input_group w_50">
              <input type="text" class="input" required />
              <label class="placeholder">Last Name</label>
            </div>
      
            <div class="input_group w_50">
              <input type="text" class="input" required />
              <label class="placeholder">Email Address</label>
            </div>
      
            <div class="input_group w_50">
              <input type="tel" class="input" required />
              <label class="placeholder">Mobile Number</label>
            </div>
      
            <div class="input_group w_100">
              <textarea class="input input_textarea " rows="6" required></textarea>
              <label class="placeholder textarea">Write your message here...</label>
            </div>
      
            <div class="input_group">
              <input type="submit" class="btn" value="Send" />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Contactus;
