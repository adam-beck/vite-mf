import { i as index_cjs, r as remote__mf_v__runtimeInit__mf_v__ } from './remote__mf_v__runtimeInit__mf_v__-C_UNlhGT.js';
import { j as jsxRuntimeExports, B as Button } from './Button-De48msAV.js';
import { R as React } from './remote__loadShare__react__loadShare__-Bh6rkMJS.js';
import './_commonjsHelpers-B85MJLTf.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var client = {};

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = remote__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^18.2.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var remote__loadShare__react_mf_2_dom__loadShare__ = exportModule;

var m = remote__loadShare__react_mf_2_dom__loadShare__;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Remote Application" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This is the standalone remote app" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {})
  ] });
}

client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
