import $ from "jquery";
import location from "./router/location";

export default {
  location: location.actions,
  fetchData: () => (state, actions) => {
    actions.setState({ loading: true });
    $.ajax({
      url: process.env.API_ENDPOINT,
      jsonp: "callback",
      dataType: "jsonp"
    }).done(repos => {
      actions.setState({ loading: false });
      actions.setState({ repos });
    });
  },
  setState: state => state
};
