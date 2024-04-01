import React from "react";
import "./footer.css";
import ME from "../../assets/logo2.jpg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer2">
        <div>
          <img src={ME} />
        </div>
        <div>
          <h3>Address</h3>
          <p>
            26, Chatam Lines, <br /> Near Prayag Railway Station, <br />{" "}
            Allahabad, Uttar Pradesh <br /> 211002
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <span className="fone">0532 242 5206</span> <br />{" "}
            <a href="mailto:iert.ac.in@gmail.com">iert.ac.in@gmail.com</a>
          </p>
        </div>

        <div>
          <h3>Quick links</h3>
          <p>
            <a href="mailto:iert.ac.in@gmail.com">iert.ac.in@gmail.com</a>
            <br />
            <a href="/">support</a>
            <br />
            <a href="/">payments</a>
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="/">Twitter</a>
            <br />
            <a href="/">Facebook</a>
            <br />
            <a href="/">Instagram</a>
          </p>
        </div>
      </div>
      <small className="right">Copyright &copy; IERT Alumni 2024</small>
    </div>
  );
};

export default Footer;
