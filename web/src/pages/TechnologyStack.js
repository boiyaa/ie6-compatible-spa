import { h } from "hyperapp";
import { t } from "i18next";
import hyperapp from "./hyperapp.png";
import jquery from "./jquery.png";
import babel from "./babel.png";
import parcel from "./parcel.jpg";
import gae from "./gae.png";

export default () => () => (
  <div class="site-body technology-stack">
    <div class="site-center">
      <div class="col">
        <div class="cell">
          <div class="page-header">
            <h1>{t("technologyStack.heading")}</h1>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="body">
          <div class="cell">
            <div class="col width-fit">
              <div class="cell">
                <img src={hyperapp} alt="hyperapp" />
              </div>
            </div>
            <div class="col width-fill">
              <div class="cell">
                <h2>
                  <a
                    href="https://github.com/jorgebucaran/hyperapp"
                    target="_blank"
                  >
                    Hyperapp
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="body">
          <div class="cell">
            <div class="col width-fit">
              <div class="cell">
                <img src={jquery} alt="jquery" />
              </div>
            </div>
            <div class="col width-fill">
              <div class="cell">
                <h2>
                  <a href="https://jquery.com" target="_blank">
                    jQuery (version 1)
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="body">
          <div class="cell">
            <div class="col width-fit">
              <div class="cell">
                <img src={babel} alt="babel" />
              </div>
            </div>
            <div class="col width-fill">
              <div class="cell">
                <h2>
                  <a href="https://babeljs.io" target="_blank">
                    Babel
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="body">
          <div class="cell">
            <div class="col width-fit">
              <div class="cell">
                <img src={parcel} alt="parcel" />
              </div>
            </div>
            <div class="col width-fill">
              <div class="cell">
                <h2>
                  <a href="https://parceljs.org" target="_blank">
                    Parcel
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="body">
          <div class="cell">
            <div class="col width-fit">
              <div class="cell">
                <img src={gae} alt="gae" />
              </div>
            </div>
            <div class="col width-fill">
              <div class="cell">
                <h2>
                  <a href="https://cloud.google.com/appengine/" target="_blank">
                    Google App Engine
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
