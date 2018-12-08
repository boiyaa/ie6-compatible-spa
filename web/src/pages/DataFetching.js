import { h } from "hyperapp";
import { t } from "i18next";

export default () => (state, actions) => (
  <div class="site-body technology-stack">
    <div class="site-center">
      <div class="col">
        <div class="cell">
          <div class="page-header">
            <h1>{t("dataFetching.heading")}</h1>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="cell">
          {state.loading ? (
            <button class="button" disabled>
              Loading...
            </button>
          ) : (
            <button class="icon-button button" onclick={actions.fetchData}>
              <i class="icon material-icons">&#xe5d5;</i>
              {t("dataFetching.fetchData")}
            </button>
          )}
        </div>
      </div>

      {state.repos.map(repo => (
        <div class="col">
          <div class="cell panel">
            <div class="col">
              <div class="cell">
                <h2>
                  <a href={repo.html_url} target="_blank">
                    {repo.full_name}
                  </a>
                </h2>
              </div>
            </div>
            <div class="col">
              <div class="cell">
                <p>{repo.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
