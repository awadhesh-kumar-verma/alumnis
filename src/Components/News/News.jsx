import React from "react";
import { IoMdMenu } from "react-icons/io";

import "./news.css";

const News = () => {
  return (
    <section id="id1">
      <div className="container">
        <div>
          <h2>N<span className="und">ewsroo</span>m</h2>
          <div>
            <div className="new">
              <div className="new1">
                <div className="new12">
                  <IoMdMenu />
                </div>
              </div>
              <div className="new2">
                <article className="experience__details">
                  <div>
                    <h4>
                      Lorem ipsum donor sit amet, consectetur adipiscing elit,
                      Habitant ac sit eu ipsum lco
                    </h4>
                  </div>
                </article>
                <div className="blc"></div>

                <article className="experience__details">
                  <div>
                    <h4>
                      Lorem ipsum donor sit amet, consectetur adipiscing elit,
                      Habitant ac sit eu ipsum lco
                    </h4>
                  </div>
                </article>
                <div className="blc"></div>

                <article className="experience__details">
                  <div>
                    <h4>
                      Lorem ipsum donor sit amet, consectetur adipiscing elit,
                      Habitant ac sit eu ipsum lco
                    </h4>
                  </div>
                </article>
                <div className="blc"></div>

                <article className="experience__details">
                  <div>
                    <h4>
                      Lorem ipsum donor sit amet, consectetur adipiscing elit,
                      Habitant ac sit eu ipsum lco
                    </h4>
                  </div>
                </article>
                <div className="blc"></div>

                <article className="experience__details">
                  <div>
                    <h4>
                      Lorem ipsum donor sit amet, consectetur adipiscing elit,
                      Habitant ac sit eu ipsum lco
                    </h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="experience__frontend">
          <h2> E<span className="und">vent</span>s</h2>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>NO events yet.</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
