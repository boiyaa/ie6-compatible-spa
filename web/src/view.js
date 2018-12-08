import { h } from "hyperapp";
import { t } from "i18next";
import "./view.css";
import { Link, Route } from "./router";
import TechnologyStack from "./pages/TechnologyStack";
import DataFetching from "./pages/DataFetching";
import Home from "./pages/Home";

export default state => (
  <div class={state.location.pathname === "/" && "home"}>
    <div class="site-header-fixture">
      {state.location.pathname !== "/" && (
        <div class="site-header-ghost">
          <div class="site-center">
            <div class="col width-fit mobile-width-fit">
              <div class="cell">
                <ul class="col nav">
                  <li>
                    <a>ghost</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="site-header">
        <div class="site-center">
          <div class="col width-fit mobile-width-fit brand">
            <div class="cell">
              <div class="col">
                <Link to="/">
                  <i
                    class="material-icons"
                    style={{
                      margin: "-12px 10px 0 0",
                      fontSize: "48px",
                      verticalAlign: "top"
                    }}
                  >
                    &#xeb4c;
                  </i>
                  <span
                    style={{
                      fontSize: "24px"
                    }}
                  >
                    {t("site.title")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="col width-fit mobile-width-fit gmenu">
            <div class="cell">
              <ul class="col nav">
                <li
                  class={
                    state.location.pathname === "/technology-stack" && "active"
                  }
                >
                  <Link to="/technology-stack">{t("site.menu.0")}</Link>
                </li>
                <li
                  class={
                    state.location.pathname === "/data-fetching" && "active"
                  }
                >
                  <Link to="/data-fetching">{t("site.menu.1")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col width-fit mobile-width-fit lang"
            style={{ float: "right" }}
          >
            <div class="cell">
              <ul class="col nav">
                <li>
                  <a href="?lng=en">EN</a>
                </li>
                <li>
                  <a href="?lng=ja">JA</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Route path="/" render={Home} />
    <Route path="/technology-stack" render={TechnologyStack} />
    <Route path="/data-fetching" render={DataFetching} />
  </div>
);
