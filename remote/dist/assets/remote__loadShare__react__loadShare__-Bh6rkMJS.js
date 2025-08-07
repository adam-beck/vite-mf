import { g as getDefaultExportFromCjs } from './_commonjsHelpers-B85MJLTf.js';
import { r as remote__mf_v__runtimeInit__mf_v__, i as index_cjs } from './remote__mf_v__runtimeInit__mf_v__-C_UNlhGT.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = remote__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^18.2.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var remote__loadShare__react__loadShare__ = exportModule;

const React = /*@__PURE__*/getDefaultExportFromCjs(remote__loadShare__react__loadShare__);

export { React as R, remote__loadShare__react__loadShare__ as r };
