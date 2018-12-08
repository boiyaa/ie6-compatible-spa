const isIE7AndBelow = /MSIE (6|7)/.test(window.navigator.appVersion);

document.createElement_ = window.addEventListener
  ? function(nodeName) {
      var element = document.createElement(nodeName);
      element.setAttribute_ = element.setAttribute;
      element.removeAttribute_ = element.removeAttribute;
      return element;
    }
  : function(nodeName) {
      var element = document.createElement(nodeName);

      var registry = [];

      element.addEventListener = function(type, listener) {
        var target = this;

        registry.unshift([
          target,
          type,
          listener,
          function(event) {
            event.currentTarget = target;
            event.preventDefault = function() {
              event.returnValue = false;
            };
            event.stopPropagation = function() {
              event.cancelBubble = true;
            };
            event.target = event.srcElement || target;

            listener.call(target, event);
          }
        ]);

        this.attachEvent("on" + type, registry[0][3]);
      };

      element.removeEventListener = function(type, listener) {
        for (var index = 0, register; (register = registry[index]); ++index) {
          if (
            register[0] == this &&
            register[1] == type &&
            register[2] == listener
          ) {
            return this.detachEvent(
              "on" + type,
              registry.splice(index, 1)[0][3]
            );
          }
        }
      };

      element.setAttribute_ = isIE7AndBelow
        ? function(name, value) {
            if (name === "class") {
              return element.setAttribute("className", value);
            } else {
              return element.setAttribute(name, value);
            }
          }
        : element.setAttribute;

      element.removeAttribute_ = isIE7AndBelow
        ? function(name) {
            if (name === "class") {
              return element.removeAttribute("className");
            } else {
              return element.removeAttribute(name);
            }
          }
        : element.removeAttribute;

      return element;
    };
