import React from "react";
import "./home.css";
import ME from '../../assets/logo.jpg';

const Home = () => {
  return (
    <main id="home" className="hme">
      <div id="nav">
        <a href="/">
          <img className="img" src={ME} alt="sorry" />
        </a>
      </div>
      <div className="hme2">
        <p className="wel1">Welcome To Alumni <br/> Society of IERT</p>
        <p className="wel2">Start a new paragraph. You can also use keyboard shortcuts or the formatting options <br/> in the editor to align, indent, or style your paragraphs. If you're working with Markdown <br/> files, you can use double spaces at the end of a line to create a line break, which can be <br/> used to create paragraphs when rendered.</p>

        <button className="btn2">Join Now</button>
      </div>
    </main>
  );
};

export default Home;