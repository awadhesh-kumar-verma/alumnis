import React from "react";
import "./register.css";
import M1 from "../../assets/1undraw_authentication_fsn5 1.png";
import M2 from "../../assets/4Rectangle 115.png";
import M3 from "../../assets/5Register.png";
import M4 from "../../assets/2image 11.png";
import M5 from "../../assets/3submit (1) 1.png";

const Register = () => {
  return (
    <section id="register">
      <h2>
        H<span className="und">ow To Registe</span>r
      </h2>

      <div className="reg">
        <div>
          <div className="div1">
            <h3>01</h3>
            <img src={M1} />
          </div>
          <h3>Log In/Sign UP</h3>
          <p>
            Log in you already have an account <br /> If you don't have an
            account sign up to create one
          </p>
        </div>

        <div>
          <div className="div2">
            <h3>02</h3>
            <div className="img2">
              <img src={M2} />
              <img className="img1" src={M3} />
            </div>
          </div>
          <h3>Click To Register</h3>
          <p>Click on the apply button to start the application process</p>
        </div>

        <div>
          <div className="div3">
            <h3>03</h3>
            <img src={M4} />
          </div>
          <h3>Fill The Forms</h3>
          <p>
            Fill all the forms presented with precise and credible information
          </p>
        </div>

        <div>
          <div className="div4">
            <h3>04</h3>
            <img src={M5} />
          </div>
          <h3>Submit Form</h3>
          <p>
            Click on the submit button after filling all the forms with the
            needed data
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
