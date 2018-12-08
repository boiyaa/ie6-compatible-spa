import { app } from "hyperapp";
import { use } from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { location } from "./router";
import actions from "./actions";
import state from "./state";
import view from "./view";

const options = {
  detection: {
    caches: ["cookie"]
  },
  debug: false,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        site: {
          title: "IE6-compatible SPA",
          menu: ["Technology Stack", "Data Fetching"]
        },
        home: {
          heading:
            "The most modern IE6-compatible websites at the present time",
          body: [
            "IE 6 released in 2001 is the web browser which has a 0.13% market share in 2018 and supports for all Windows provided with IE 6 already ended.",
            "This website is written in the latest ECMAScript, a SPA with Hyperapp, and an application bundled with Percel, but it works with IE 6.",
            "I have checked it with native IE 6 on Windows XP provided by BrowserStack."
          ]
        },
        technologyStack: {
          heading: "Technology stack of this website"
        },
        dataFetching: {
          heading: "Asynchronous data fetching example",
          fetchData: "Fetch data"
        }
      }
    },
    ja: {
      translation: {
        site: {
          title: "IE6-compatible SPA",
          menu: ["技術スタック", "非同期通信"]
        },
        home: {
          heading: "今もっともモダンなIE6対応サイト",
          body: [
            "2001年にリリースされたIE6は、2018年現在ブラウザシェア0.13%で、IE6が提供されている全てのWindowsはすでにサポート終了しています。",
            "このサイトは最新のECMAScriptで記述され、Hyperappを採用したSPAで、Parcelでバンドルされたアプリケーションですが、IE6で動作します。",
            "動作確認はBrowserStackの提供するWindows XP上のネイティブなIE6で行なっております。"
          ]
        },
        technologyStack: {
          heading: "このサイトの技術スタック"
        },
        dataFetching: {
          heading: "非同期通信サンプル",
          fetchData: "データ取得"
        }
      }
    }
  }
};

const run = () => {
  const main = app(state, actions, view, document.body);
  location.subscribe(main.location);
};

use(LngDetector).init(options, run);
