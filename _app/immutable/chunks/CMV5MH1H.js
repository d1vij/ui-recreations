const e=typeof navigator<"u"&&typeof navigator.vibrate=="function";function r(t){return e?navigator.vibrate(t):!1}function i(t){return n=>n.addEventListener("click",()=>r(t))}export{i as v};
