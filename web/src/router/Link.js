import { h } from "hyperapp";
import { Link } from "@hyperapp/router/src/Link";

export default (window.history.pushState
  ? Link
  : ({ to }, children) => <a href={`#${to}`}>{children}</a>);
