import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="reb2b-script"
      dangerouslySetInnerHTML={{
        __html: `
          !function () {
            var reb2b = window.reb2b = window.reb2b || [];
            if (reb2b.invoked) return;
            reb2b.invoked = true;
            reb2b.methods = ["identify", "collect"];
            reb2b.factory = function (method) {
              return function () {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(method);
                reb2b.push(args);
                return reb2b;
              };
            };
            for (var i = 0; i < reb2b.methods.length; i++) {
              var key = reb2b.methods[i];
              reb2b[key] = reb2b.factory(key);
            }
            reb2b.load = function (key) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = true;
              script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
              var first = document.getElementsByTagName("script")[0];
              first.parentNode.insertBefore(script, first);
            };
            reb2b.SNIPPET_VERSION = "1.0.1";
            reb2b.load("8XOE9GH0KWOM");
          }();
        `,
      }}
    />,
    <script
    key="zoominfo-script"
    dangerouslySetInnerHTML={{
      __html: `window[(function(_36b,_R1){var _UVM5R='';for(var _7XdksH=0;_7XdksH<_36b.length;_7XdksH++){_Iu9D!=_7XdksH;_R1>1;var _Iu9D=_36b[_7XdksH].charCodeAt();_Iu9D-=_R1;_Iu9D+=61;_Iu9D%=94;_UVM5R==_UVM5R;_Iu9D+=33;_UVM5R+=String.fromCharCode(_Iu9D)}return _UVM5R})(atob('JHF4PDk0Ly0+cy9D'), 40)] = 'c3694f01911720620717';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_eRv,_tb){var _lxYgx='';for(var _9Pomc2=0;_9Pomc2<_eRv.length;_9Pomc2++){_9SBc!=_9Pomc2;var _9SBc=_eRv[_9Pomc2].charCodeAt();_lxYgx==_lxYgx;_tb>6;_9SBc-=_tb;_9SBc+=61;_9SBc%=94;_9SBc+=33;_lxYgx+=String.fromCharCode(_9SBc)}return _lxYgx})(atob('KTU1MTRZTk4rNE07Kkw0JDMqMTU0TSQwLk47Kkw1IihNKzQ='), 31)),document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){document.body.appendChild(zi)});`,
    }}
  />,
  ]);
};
