import { h } from "hyperapp";
import { t } from "i18next";

export default () => () => (
  <div
    class="site-body"
    style={{
      paddingTop: "220px",
      color: "#fff"
    }}
  >
    <div class="site-center">
      <div class="col">
        <div class="cell">
          <h2>{t("home.heading")}</h2>
        </div>
      </div>
      <div class="col">
        <div class="cell">
          {t("home.body", { returnObjects: true }).map(sentence => (
            <p
              style={{
                fontSize: "120%",
                lineHeight: "200%"
              }}
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
