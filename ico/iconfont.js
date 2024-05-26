(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M369.5 980.9l-81.8-73.6 354.4-393.8-375-394.7L346.9 43l445 468.5z"  ></path></symbol><symbol id="icon-zuojiantou" viewBox="0 0 1024 1024"><path d="M267.1 511.5L712.1 43l79.8 75.8-375 394.7 354.4 393.8-81.8 73.6z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var o,
        i,
        d,
        c,
        s,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? a(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((d = o),
            (c = n.document),
            (s = !1),
            r(),
            (c.onreadystatechange = function () {
              "complete" == c.readyState &&
                ((c.onreadystatechange = null), l());
            }));
    }
    function l() {
      s || ((s = !0), d());
    }
    function r() {
      try {
        c.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
