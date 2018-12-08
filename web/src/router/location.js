import { location } from "@hyperapp/router/src/location";

!window.history.pushState && window.location.replace("#/");

export default (window.history.pushState
  ? location
  : {
      state: {
        pathname: window.location.hash.slice(1),
        previous: window.location.hash.slice(1)
      },
      actions: {
        go: pathname => {
          location.hash = `#${pathname}`;
        },
        set: state => state
      },
      subscribe(actions) {
        const intervalID = setInterval(() => {
          const pathname = window.location.hash.slice(1);
          if (this.state.pathname !== pathname) {
            actions.set({
              pathname: pathname,
              previous: this.state.pathname
            });
          }
        }, 100);

        return () => clearInterval(intervalID);
      }
    });
